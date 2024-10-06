from dotenv import load_dotenv
from flask import Blueprint, request, jsonify
from .aerosolMetadata import aerosol_metadata
import earthaccess

# authentication
load_dotenv()

earthaccess.login(strategy="environment")

app = Blueprint("aerosol", __name__)

def authenticate():
    try:
        session = earthaccess.login(strategy="environment")
        return session
    except Exception as e:
        return str(e)

@app.route('/definition', methods=['GET'])
def aerosol_definition():
    return jsonify({
        "title": "What are Aerosols?",
        "description": aerosol_metadata["definition"]["description"],
        "types": aerosol_metadata["definition"]["types"]
    })

@app.route('/effects', methods=['GET'])
def aerosol_effects():
    return jsonify({
        "title": "Effects of Aerosols on Climate",
        "description": aerosol_metadata["effects_on_climate"]["description"],
        "examples": aerosol_metadata["effects_on_climate"]["examples"]
    })

# Route for Health Impacts of Aerosols
@app.route('/health', methods=['GET'])
def aerosol_health():
    return jsonify({
        "title": "Health Impacts of Aerosols",
        "description": aerosol_metadata["health_impacts"]["description"]
    })

# Route for Measurement of Aerosols
@app.route('/measurement', methods=['GET'])
def aerosol_measurement():
    return jsonify({
        "title": "How are Aerosols Measured?",
        "description": aerosol_metadata["measurement"]["description"],
        "platforms": aerosol_metadata["measurement"]["platforms"],
        "instrument": aerosol_metadata["measurement"]["instrument"]
    })

@app.route('', methods=['GET'])
def aerosol_general():
    activity = request.args.get('activity')
    
    if activity == 'definition':
        return aerosol_definition()
    elif activity == 'effects':
        return aerosol_effects()
    elif activity == 'health':
        return aerosol_health()
    elif activity == 'measurement':
        return aerosol_measurement()
    else:
        return jsonify({"error": "Invalid activity. Available activities: definition, effects, health, measurement"}), 400

