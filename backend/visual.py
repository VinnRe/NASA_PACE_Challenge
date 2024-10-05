import requests
import numpy as np
import matplotlib.pyplot as plt
import xarray as xr
from pyproj import Geod

# URL for the local Flask API
API_URL = "http://127.0.0.1:5000/api/sea-surface-temperature"

def fetch_data():
    try:
        response = requests.get(API_URL)
        response.raise_for_status()  # Raise an error for bad responses
        print("API Response:", response.json())  # Add this line to inspect the response
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return None

def ssl_area(lats):
    """Calculate the area associated with a 1/6 by 1/6 degree box at latitude specified in "lats".

    Parameters:
        lats: a list or numpy array of size N the latitudes of interest.

    Returns:
        Array (N) area values (unit: m^2)
    """
    geod = Geod(ellps="WGS84")
    dx = 1 / 12.0  # 1/12 degree box
    lon_offset = np.array((-dx, dx, dx, -dx))
    lat_offset = np.array((-dx, -dx, dx, dx))
    out = []
    for lat in lats:
        # Calculate area for each latitude
        c_area, *_ = geod.polygon_area_perimeter(lon_offset, lat + lat_offset)
        out.append(c_area)
    return np.array(out)

def global_mean(SLA, ssh_area):
    dout = ((SLA * ssh_area).sum() / (SLA / SLA * ssh_area).sum()) * 1000
    return dout

def visualize_data(data):
    if 'results' in data and len(data['results']) > 0:
        lats = [item['latitude'] for item in data['results'] if 'latitude' in item]
        slas = [item['sla'] for item in data['results'] if 'sla' in item]  # Ensure the key matches your data

        if not lats or not slas:  # Check if lists are empty
            print("Latitude or SLA lists are empty.")
            return

        # Convert lists to NumPy arrays
        lats_array = np.array(lats)
        slas_array = np.array(slas)

        # Ensure correct shapes
        print("Lats shape:", lats_array.shape)
        print("SLAs shape:", slas_array.shape)

        # Proceed with area calculation and plotting
        ssh_area = ssl_area(lats_array)
        print("SSH Area shape:", ssh_area.shape)  # Verify area shape

        # Create a dummy xarray dataset (make sure dimensions match)
        ds = xr.Dataset(
            {
                "SLA": (("Time", "Latitude"), slas_array.reshape(-1, 1)),  # Adjust dimensions if necessary
            },
            coords={
                "Time": np.arange(len(slas_array)),  # Dummy time values
                "Latitude": lats_array,
            }
        )

        # Calculate the global mean
        result = ds.SLA.groupby("Time").apply(global_mean, ssh_area)

        if result.size == 0:
            print("No results from global mean calculation.")
        else:
            # Proceed with plotting
            plt.rcParams["figure.figsize"] = (16, 4)
            plt.grid(True)
            plt.xlabel("Time (year)", fontsize=16)
            plt.ylabel("Global Mean SLA (meter)", fontsize=12)
            result.plot(color="orange", marker="o", label="Satellite record")
            plt.legend()
            plt.show()
    else:
        print("No results found in the data.")

if __name__ == "__main__":
    data = fetch_data()
    if data:
        visualize_data(data)