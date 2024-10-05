import earthaccess
import json
import numpy as np
import matplotlib.pyplot as plt

earthaccess.login()

results = earthaccess.search_data(
    short_name='ATL06',
    bounding_box=(-10, 20, 10, 50),
    temporal=("1999-02", "2019-03"),
    count=10
)

if results:
    results_json = [result.__dict__ for result in results]

    print(json.dumps(results_json, indent=4))

    latitudes = []
    longitudes = []

    for result in results_json:
        latitudes.append(result.get('latitude', None))
        longitudes.append(result.get('longitude', None)) 


    latitudes = np.array(latitudes)
    longitudes = np.array(longitudes)

    plt.figure(figsize=(10, 6))
    plt.scatter(longitudes, latitudes, color='blue', label='Data Points', alpha=0.7)
    plt.title('Geographical Visualization of ATL06 Data')
    plt.xlabel('Longitude')
    plt.ylabel('Latitude')
    plt.axhline(0, color='gray', linewidth=0.5, linestyle='--')
    plt.axvline(0, color='gray', linewidth=0.5, linestyle='--')
    plt.grid()
    plt.legend()
    plt.show()
    plt.ion()
else:
    print("No results found for the specified query.")