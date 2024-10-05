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

@app.route('/api/pace-data', methods=['GET'])
def get_pace_data():
    try:
        session = authenticate()
        if isinstance(session, str):
            return jsonify({"error": "Authentication Failed: " + session}), 500
        
        results = earthaccess.search_data(short_name='CLDMSK_L2_VIIRS_SNPP',
                                            # bounding_box=(-10, 20, 10, 50),
                                            # temporal=("2023-03", "2023-03"),
                                            count=1, 
                                            cloud_hosted=True)

        return jsonify(results)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)