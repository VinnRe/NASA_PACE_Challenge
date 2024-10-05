clouds_metadata = {
    [
        {
            "Abstract": "The Atmospheric Infrared Sounder (AIRS) Level 2 Near Real Time (NRT) Cloud-Cleared Infrared Radiances (AIRS-only) product (AIRS2CCF_NRT_006) differs from the routine product (AIRS2CCF_006) in four ways to meet the three hour latency requirements of the Land Atmosphere NRT Capability Earth Observing System (LANCE): (1) The NRT granules are produced without previous or subsequent granules if those granules are not available within 5 minutes, (2) the predictive ephemeris/attitude data are used rather than the definitive ephemeris/attitude, (3) if the forecast surface pressure is unavailable, a surface climatology is used, and (4) no ice cloud properties retrievals are performed. The consequences of these differences are described in the AIRS Near Real Time (NRT) data products document. The Atmospheric Infrared Sounder (AIRS) is a grating spectrometer (R = 1200) aboard the second Earth Observing System (EOS) polar-orbiting platform, EOS Aqua. In combination with the Advanced Microwave Sounding Unit (AMSU) and the Humidity Sounder for Brazil (HSB), AIRS constitutes an innovative atmospheric sounding group of visible, infrared, and microwave sensors. This product is produced using AIRS IR only because the radiometric noise in AMSU channel 4 started to increase significantly (since June 2007). Cloud-Cleared Radiances contain calibrated, geolocated channel-by-channel AIRS infrared radiances (milliWatts/m2/cm-1/steradian) that would have been observed within each AMSU footprint if there were no clouds in the FOV and produced along with the AIRS Standard Product, as they are the radiances used to retrieve the Standard Product. Nevertheless, they are an order of magnitude larger in data volume than the remainder of the Standard Products and, many Standard Product users are expected to have little interest in the Cloud Cleared Radiance. For these reasons they are a separate output file. The AIRS2CCF_NRT_006 products are stored in files (often referred to as \"granules\") that contain 6 minutes of data, 30 footprints across track by 45 lines along track.",
            "DOI": "No DOI available",
            "Platforms": [
            {
                "Instruments": [
                {
                    "LongName": "Atmospheric Infrared Sounder",
                    "ShortName": "AIRS"
                }
                ],
                "LongName": "Earth Observing System, Aqua",
                "ShortName": "Aqua",
                "Type": "Earth Observation Satellites"
            }
            ],
            "ScienceKeywords": [
            {
                "Category": "EARTH SCIENCE",
                "DetailedVariable": "CLOUD-CLEARED INFRARED RADIANCE",
                "Term": "INFRARED WAVELENGTHS",
                "Topic": "SPECTRAL/ENGINEERING",
                "VariableLevel1": "INFRARED RADIANCE"
            }
            ],
            "TemporalExtents": [
            {
                "EndsAtPresentFlag": true,
                "RangeDateTimes": [
                {
                    "BeginningDateTime": "2016-10-15T00:00:00.000Z"
                }
                ]
            }
            ],
            "concept-id": "C1345119267-GES_DISC"
        },
        {
            "Abstract": "The MODIS/Terra Aerosol Cloud Water Vapor Ozone Monthly L3 Global 1Deg CMG product (MOD08_M3) contains monthly 1 x 1 degree grid average values of atmospheric parameters related to atmospheric aerosol particle properties, total ozone burden, atmospheric water vapor, cloud optical and physical properties, and atmospheric stability indices. This product also provides standard deviations, quality assurance weighted means and other statistically derived quantities for each parameter.  \r\n\r\nThe MOD08_M3 contains roughly 800 statistical datasets that are derived from the Level-3 MODIS Atmosphere Daily Global Product. Statistics are sorted into 1x1 degree cells on an equal-angle grid that spans a (calendar) monthly interval and then summarized over the globe. MOD08_M3 product files are stored in Hierarchical Data Format (HDF-EOS). Each gridded global parameter is stored as Scientific Data Sets (SDS) within the file. \r\n\r\nThe MODIS monthly Product will be used in the simultaneously study of clouds, water vapor, aerosol , trace gases, land surface and oceanic properties, as well as the interaction between them and their effect on the Earth's energy budget and climate. This product will also be used to investigate seasonal and inter-annual changes in cirrus (semi-transparent) global cloud cover and cloud phase with multispectral observations at high spatial resolution.\r\n\r\nFor more information about the MOD08_M3 product, please visit the MODIS-Atmosphere site at:\r\nhttps://modis-atmos.gsfc.nasa.gov/products/monthly",
            "DOI": "10.5067/MODIS/MOD08_M3.061",
            "Platforms": [
            {
                "Characteristics": [
                {
                    "DataType": "STRING",
                    "Description": "Local time of the equator crossing and direction (ascending or descending)",
                    "Name": "EquatorCrossingTime",
                    "Unit": "Local Mean Time",
                    "Value": "10:30, descending"
                }
                ],
                "Instruments": [
                {
                    "LongName": "Moderate-Resolution Imaging Spectroradiometer",
                    "ShortName": "MODIS",
                    "Technique": "Imaging Spectroradiometry"
                }
                ],
                "LongName": "Earth Observing System, Terra (AM-1)",
                "ShortName": "Terra",
                "Type": "Earth Observation Satellites"
            }
            ],
            "ScienceKeywords": [
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "AEROSOL BACKSCATTER"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "AEROSOL EXTINCTION"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "AEROSOL OPTICAL DEPTH/THICKNESS"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "AEROSOL OPTICAL DEPTH/THICKNESS",
                "VariableLevel2": "ANGSTROM EXPONENT"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "AEROSOL PARTICLE PROPERTIES"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "AEROSOL RADIANCE"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CARBONACEOUS AEROSOLS"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD CONDENSATION NUCLEI"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "DUST/ASH/SMOKE"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "NITRATE PARTICLES"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "ORGANIC PARTICLES"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "PARTICULATE MATTER"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "AEROSOLS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "SULFATE PARTICLES"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC CHEMISTRY",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "TRACE GASES/TRACE SPECIES"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC RADIATION",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "ATMOSPHERIC EMITTED RADIATION"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC RADIATION",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "EMISSIVITY"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC RADIATION",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "OPTICAL DEPTH/THICKNESS"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC RADIATION",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "RADIATIVE FLUX"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC RADIATION",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "REFLECTANCE"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC RADIATION",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "TRANSMITTANCE"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC TEMPERATURE",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "ATMOSPHERIC STABILITY"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC WATER VAPOR",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "WATER VAPOR INDICATORS",
                "VariableLevel2": "HUMIDITY"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC WATER VAPOR",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "WATER VAPOR INDICATORS",
                "VariableLevel2": "TOTAL PRECIPITABLE WATER"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC WATER VAPOR",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "WATER VAPOR PROFILES"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD MICROPHYSICS",
                "VariableLevel2": "CLOUD CONDENSATION NUCLEI"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD MICROPHYSICS",
                "VariableLevel2": "CLOUD DROPLET CONCENTRATION/SIZE"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD MICROPHYSICS",
                "VariableLevel2": "CLOUD LIQUID WATER/ICE"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD MICROPHYSICS",
                "VariableLevel2": "CLOUD OPTICAL DEPTH/THICKNESS"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD PROPERTIES",
                "VariableLevel2": "CLOUD ASYMMETRY"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD PROPERTIES",
                "VariableLevel2": "CLOUD CEILING"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD PROPERTIES",
                "VariableLevel2": "CLOUD FREQUENCY"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD PROPERTIES",
                "VariableLevel2": "CLOUD HEIGHT"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD PROPERTIES",
                "VariableLevel2": "CLOUD TOP PRESSURE"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD PROPERTIES",
                "VariableLevel2": "CLOUD TOP TEMPERATURE"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD PROPERTIES",
                "VariableLevel2": "CLOUD VERTICAL DISTRIBUTION"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD RADIATIVE TRANSFER",
                "VariableLevel2": "CLOUD EMISSIVITY"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD RADIATIVE TRANSFER",
                "VariableLevel2": "CLOUD RADIATIVE FORCING"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "CLOUDS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "CLOUD RADIATIVE TRANSFER",
                "VariableLevel2": "CLOUD REFLECTANCE"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "WEATHER EVENTS",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "RAIN STORMS"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "ATMOSPHERIC CHEMISTRY",
                "Topic": "ATMOSPHERE",
                "VariableLevel1": "OXYGEN COMPOUNDS",
                "VariableLevel2": "ATMOSPHERIC OZONE"
            }
            ],
            "TemporalExtents": [
            {
                "EndsAtPresentFlag": true,
                "PrecisionOfSeconds": 1,
                "RangeDateTimes": [
                {
                    "BeginningDateTime": "2000-02-01T00:00:00.000Z"
                }
                ]
            }
            ],
            "concept-id": "C1443766359-LAADS"
        },
        {
            "Abstract": "The RSS SSMIS Ocean Product Grids Weekly Average from DMSP F16 netCDF dataset is part of the collection of Special Sensor Microwave/Imager (SSM/I) and Special Sensor Microwave Imager Sounder (SSMIS) data products produced as part of NASA's MEaSUREs Program. Remote Sensing Systems generates SSM/I and SSMIS binary data products using a unified, physically based algorithm to simultaneously retrieve ocean wind speed, water vapor, cloud water, and rain rate. The SSMIS data have been carefully intercalibrated to the brightness temperature level of the previous SSM/I and therefore extend this important time series of ocean winds, vapor, cloud and rain values. This algorithm is a product of 20 years of refinements, improvements, and verifications. The Global Hydrology Resource Center has reformatted the binary data into a netCDF data product for each temporal group for each satellite. The netCDF SSMI/SSMIS collection will be available for F16 for a weekly average.",
            "DOI": "10.5067/MEASURES/DMSP-F16/SSMIS/DATA303",
            "Platforms": [
            {
                "Instruments": [
                {
                    "LongName": "Special Sensor Microwave Imager/Sounder",
                    "ShortName": "SSMIS"
                }
                ],
                "LongName": "Defense Meteorological Satellite Program-F16",
                "ShortName": "DMSP 5D-3/F16",
                "Type": "Earth Observation Satellites"
            }
            ],
            "ScienceKeywords": [
            {
                "Category": "EARTH SCIENCE",
                "Term": "Atmospheric Winds",
                "Topic": "Atmosphere",
                "VariableLevel1": "Surface Winds"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "Precipitation",
                "Topic": "Atmosphere",
                "VariableLevel1": "Liquid Precipitation",
                "VariableLevel2": "Rain"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "Precipitation",
                "Topic": "Atmosphere",
                "VariableLevel1": "Precipitation Rate"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "Ocean Winds",
                "Topic": "Oceans",
                "VariableLevel1": "Surface Winds"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "Atmospheric Water Vapor",
                "Topic": "Atmosphere",
                "VariableLevel1": "Water Vapor Indicators",
                "VariableLevel2": "Water Vapor"
            },
            {
                "Category": "EARTH SCIENCE",
                "Term": "Clouds",
                "Topic": "Atmosphere",
                "VariableLevel1": "Cloud Microphysics",
                "VariableLevel2": "Cloud Liquid Water/Ice"
            }
            ],
            "TemporalExtents": [
            {
                "EndsAtPresentFlag": false,
                "RangeDateTimes": [
                {
                    "BeginningDateTime": "2003-10-26T00:00:00.000Z"
                }
                ]
            }
            ],
            "concept-id": "C1996547004-GHRC_DAAC"
        }
        ]
}