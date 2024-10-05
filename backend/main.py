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

@app.route('/api/sea-surface-temperature', methods=['GET'])
def get_pace_data():
    try:
        session = authenticate()
        if isinstance(session, str):
            return jsonify({"error": "Authentication Failed: " + session}), 500

        collections = earthaccess.search_datasets(
            keyword="SEA SURFACE TEMPERATURE",
            cloud_hosted=True,
            count=4
        )

        for collection in collections[0:2]:
            return jsonify(collection)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)