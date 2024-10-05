from dotenv import load_dotenv
from flask import Flask, jsonify
import earthaccess
import random

load_dotenv()

earthaccess.login(strategy="environment")

app = Flask(__name__)

def authenticate():
    try:
        session = earthaccess.login(strategy="environment")
        return session
    except Exception as e:
        return str(e)

@app.route('/api/phytoplankton-data', methods=['GET'])
def get_phytoplankton_data():
    try:
        session = authenticate()
        if isinstance(session, str):
            return jsonify({"error": "Authentication Failed: " + session}), 500

        datasets = earthaccess.search_datasets(
            keyword="phytoplankton",
            cloud_hosted=False
        )
        
        # Check if there are at least 3 datasets to sample from
        num_datasets = len(datasets)
        if num_datasets < 3:
            return jsonify({"error": "Not enough datasets available."}), 500
        
        # Randomly select 3 datasets
        random_datasets = random.sample(datasets, 3)

        dataset_details = []
        for dataset in random_datasets:
            details = {}
            if 'meta' in dataset:
                details['concept-id'] = dataset['meta'].get('concept-id', "No concept-id available")
            if 'umm' in dataset:
                details['Abstract'] = dataset['umm'].get('Abstract', "No Abstract available")
                details['DOI'] = dataset['umm'].get('DOI', {}).get('DOI', "No DOI available")
                details['Platforms'] = dataset['umm'].get('Platforms', "No Platforms available")
                details['ScienceKeywords'] = dataset['umm'].get('ScienceKeywords', "No ScienceKeywords available")
                details['TemporalExtents'] = dataset['umm'].get('TemporalExtents', "No TemporalExtents available")

            dataset_details.append(details)

        return jsonify(dataset_details)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)