from dotenv import load_dotenv
from flask import Blueprint, request, jsonify
from .oceanMetadata import ocean_ecosystem_data 
import earthaccess

load_dotenv()

earthaccess.login(strategy="environment")

app = Blueprint("ocean", __name__)

def authenticate():
    try:
        session = earthaccess.login(strategy="environment")
        return session
    except Exception as e:
        return str(e)

@app.route('/', methods=['GET'])
def get_ocean_ecosystem():
    return jsonify(ocean_ecosystem_data["overview"])

@app.route('/phytoplankton', methods=['GET'])
def get_phytoplankton_data():
    return jsonify(ocean_ecosystem_data["phytoplankton"])

@app.route('/marine-biodiversity', methods=['GET'])
def get_marine_biodiversity_data():
    return jsonify(ocean_ecosystem_data["marine_biodiversity"])

@app.route('/ocean-color', methods=['GET'])
def get_ocean_color_data():
    return jsonify(ocean_ecosystem_data["ocean_color"])

@app.route('/pollution', methods=['GET'])
def get_pollution_data():
    return jsonify(ocean_ecosystem_data["pollution"])
