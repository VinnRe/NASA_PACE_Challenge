from dotenv import load_dotenv
from flask import Flask, request, jsonify
import earthaccess

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

        collections = earthaccess.search_datasets(
            keyword="Pythoplankton",
            cloud_hosted=True,
            count=4
        )

        for collection in collections:
            return jsonify(collection)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/aerosol-data', methods=['GET'])
def get_aerosol_data():
    try:
        session = authenticate()
        if isinstance(session, str):
            return jsonify({"error": "Authentication Failed: " + session}), 500

        collections = earthaccess.search_datasets(
            keyword="AEROSOL",
            cloud_hosted=True,
            count=4
        )

        for collection in collections:
            return jsonify(collection)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/cloud-properties-data', methods=['GET'])
def get_cloud_data():
    try:
        session = authenticate()
        if isinstance(session, str):
            return jsonify({"error": "Authentication Failed: " + session}), 500

        collections = earthaccess.search_datasets(
            keyword="CLOUD PROPERTIES",
            cloud_hosted=True,
            count=4
        )

        for collection in collections:
            return jsonify(collection)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/ocean-ecosystem-data', methods=['GET'])
def get_ocean_data():
    try:
        session = authenticate()
        if isinstance(session, str):
            return jsonify({"error": "Authentication Failed: " + session}), 500

        collections = earthaccess.search_datasets(
            keyword="OCEAN ECOSYSTEM",
            cloud_hosted=True,
            count=4
        )

        for collection in collections:
            return jsonify(collection)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)