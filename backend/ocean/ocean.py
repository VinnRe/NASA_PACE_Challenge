from dotenv import load_dotenv
from flask import Flask, request, jsonify
from oceanMetadata import ocean_ecosystem_data 
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

@app.route('/api/ocean-ecosystem', methods=['GET'])
def get_ocean_ecosystem():
    return jsonify(ocean_ecosystem_data["overview"])

@app.route('/api/ocean-ecosystem/phytoplankton', methods=['GET'])
def get_phytoplankton_data():
    return jsonify(ocean_ecosystem_data["phytoplankton"])

@app.route('/api/ocean-ecosystem/marine-biodiversity', methods=['GET'])
def get_marine_biodiversity_data():
    return jsonify(ocean_ecosystem_data["marine_biodiversity"])

@app.route('/api/ocean-ecosystem/ocean-color', methods=['GET'])
def get_ocean_color_data():
    return jsonify(ocean_ecosystem_data["ocean_color"])

@app.route('/api/ocean-ecosystem/pollution', methods=['GET'])
def get_pollution_data():
    return jsonify(ocean_ecosystem_data["pollution"])


if __name__ == '__main__':
    app.run(debug=True, port=5000)