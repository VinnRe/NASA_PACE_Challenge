import earthaccess
import json
import numpy as np
import matplotlib.pyplot as plt

# Step 1: Login
earthaccess.login()

# Step 2: Search for data (ATL06 as an example)
results = earthaccess.search_data(
    short_name='ATL06',
    bounding_box=(-10, 20, 10, 50),
    temporal=("1999-02", "2019-03"),
    count=10
)

# Step 3: Display metadata as JSON and extract relevant data for visualization
if results:
    # Convert the results to a list of dictionaries (JSON-like structure)
    results_json = [result.__dict__ for result in results]

    # Pretty print the JSON data
    print(json.dumps(results_json, indent=4))

    # Extract relevant data for visualization
    # Here, we'll assume that there are coordinates or numerical values in the result
    latitudes = []
    longitudes = []
    # You may need to adjust the keys based on the actual structure of your result
    for result in results_json:
        latitudes.append(result.get('latitude', None))  # Replace 'latitude' with the correct key
        longitudes.append(result.get('longitude', None))  # Replace 'longitude' with the correct key

    # Convert to NumPy arrays
    latitudes = np.array(latitudes)
    longitudes = np.array(longitudes)

    # Step 4: Visualize the data
    plt.figure(figsize=(10, 6))
    plt.scatter(longitudes, latitudes, color='blue', label='Data Points', alpha=0.7)
    plt.title('Geographical Visualization of ATL06 Data')
    plt.xlabel('Longitude')
    plt.ylabel('Latitude')
    plt.axhline(0, color='gray', linewidth=0.5, linestyle='--')  # Equator line
    plt.axvline(0, color='gray', linewidth=0.5, linestyle='--')  # Prime meridian line
    plt.grid()
    plt.legend()
    plt.show()
    plt.ion()
else:
    print("No results found for the specified query.")