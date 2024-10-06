from dotenv import load_dotenv
from flask import Flask
import earthaccess

load_dotenv

earthaccess.login(strategy="environment")

app = Flask(__name__)

from phytoplankton.phytoplankton import app as phytoplankton_app
from aerosol.aerosol import app as aerosol_app
from clouds.clouds import app as clouds_app
from ocean.ocean import app as ocean_app

app.register_blueprint(phytoplankton_app, url_prefix='/api')
app.register_blueprint(aerosol_app, url_prefix='/api/aerosol')
app.register_blueprint(clouds_app, url_prefix='/api')
app.register_blueprint(ocean_app, url_prefix='/api/ocean-ecosystem')

if __name__ == '__main__':
    app.run(debug=True, port=5000)