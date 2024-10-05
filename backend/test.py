import cartopy.crs as ccrs
import earthaccess
import h5netcdf
import matplotlib.pyplot as plt
import numpy as np
import xarray as xr
import s3fs
from dotenv import load_dotenv
from flask import Flask, request, jsonify

# authentication
load_dotenv()
earthaccess.login(strategy="environment")

app = Flask(__name__)

def authenticate():
    try:
        session = earthaccess.login(strategy="environment")
        return session
    except Exception as e:
        return str(e)

# Search and Open OCI L1B Data
tspan = ("2024-04-01", "2024-04-16")
bbox = (-76.75, 36.97, -75.74, 39.01)

results = earthaccess.search_data(
    short_name="PACE_OCI_L1B_SCI",
    temporal=tspan,
    bounding_box=bbox,
    count=1
)
paths = earthaccess.open(results)

# Inspect the structure of the first file
with h5netcdf.File(paths[0]) as file:
    groups = list(file)
print("Groups:", groups)

# Open the 'observation_data' group
dataset = xr.open_dataset(paths[0], group="observation_data")
print(dataset)

# Downsample and plot reflectance for blue_bands at position 100
rhot_blue_downsampled = dataset['rhot_blue'].isel(number_of_scans=slice(0, 500, 10), ccd_pixels=slice(0, 1272, 10))
plot = rhot_blue_downsampled.sel({"blue_bands": 100}).plot(cmap="viridis")
plt.show()

# Open the 'navigation_data' group and merge it
nav_data = xr.open_dataset(paths[0], group="navigation_data")
nav_data = nav_data.set_coords(("longitude", "latitude"))
nav_data = nav_data.rename({"pixel_control_points": "pixels_per_line"})

# Merge navigation data with reflectance data
merged_data = xr.merge((dataset["rhot_blue"], nav_data.coords))

# Create a scatter map using longitude and latitude
plt.scatter(merged_data['longitude'].values, merged_data['latitude'].values, 
            c=merged_data["rhot_blue"].sel({"blue_bands": 100}).values, cmap="viridis")
plt.colorbar(label="Reflectance")
plt.xlabel("Longitude")
plt.ylabel("Latitude")
plt.show()  # Ensure plot is displayed