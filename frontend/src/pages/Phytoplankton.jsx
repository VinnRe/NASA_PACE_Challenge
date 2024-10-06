import React, { useState } from 'react';
import '../styles/phytoplankton.css';
import diatomImage from '../image/DIATOM.png';
import dinoflagellateImage from '../image/Dinoflagellate.png';
import cyanobacteriaImage from '../image/cyanobacteria.png';
import chlorophytaImage from '../image/chlorophytat.png';
import cryptophytaImage from '../image/CRYPTOPYT.png';
import haptophytaImage from '../image/HaptophytaI-r.png';
import phaeophytaImage from '../image/Phaeophyt.png';
import euglenophytaImage from '../image/euglenophyta.png';

const Phytoplankton = () => {
    const [selectedSpecies, setSelectedSpecies] = useState(null);

    const speciesData = {
        diatom: {
            name: "Diatoms",
            image: diatomImage,
            habitat: "Habitats: Marine and freshwater.",
            role: "Role: Major producers in aquatic environments."
        },
        dinoflagellate: {
            name: "Dinoflagellates",
            image: dinoflagellateImage,
            habitat: "Habitats: Marine and freshwater.",
            role: "Role: Important in food webs and harmful algal blooms."
        },
        cyanobacteria: {
            name: "Cyanobacteria",
            image: cyanobacteriaImage,
            habitat: "Habitats: Freshwater, saltwater.",
            role: "Role: Nitrogen fixation and oxygen production."
        },
        chlorophyta: {
            name: "Chlorophyta",
            image: chlorophytaImage,
            habitat: "Habitats: Freshwater, marine.",
            role: "Role: Primary producers in many ecosystems."
        },
        euglenophyta: {
            name: "Euglenophyta",
            image: euglenophytaImage,
            habitat: "Habitats: Freshwater.",
            role: "Role: Can photosynthesize and consume organic matter."
        },
        cryptophyta: {
            name: "Cryptophyta",
            image: cryptophytaImage,
            habitat: "Habitats: Freshwater and marine environments.",
            role: "Role: Contributes to carbon cycling."
        },
        haptophyta: {
            name: "Haptophyta",
            image: haptophytaImage,
            habitat: "Habitats: Oceanic environments.",
            role: "Role: Important in the marine food web."
        },
        phaeophyta: {
            name: "Phaeophyta",
            image: phaeophytaImage,
            habitat: "Habitats: Cold marine waters.",
            role: "Role: Forms kelp forests."
        }
    };

    const showSpeciesInfo = (species) => {
        setSelectedSpecies(species);
    };

    const closeInfo = () => {
        setSelectedSpecies(null);
    };

    return (
        <div className="phytoplankton-container">
            <header className="phytoplankton-header">
                <h1>Explore Forest Species!</h1>
                <p>Click on a species to learn more!</p>
            </header>

            <div className="species-list">
                {Object.keys(speciesData).map((key) => (
                    <div
                        key={key}
                        className="species-item"
                        onClick={() => showSpeciesInfo(key)}
                    >
                        <img src={speciesData[key].image} alt={speciesData[key].name} />
                        <h2>{speciesData[key].name}</h2>
                    </div>
                ))}
            </div>

            {selectedSpecies && (
                <div className="species-info">
                    <div className="species-image-container">
                        <img src={speciesData[selectedSpecies].image} alt={speciesData[selectedSpecies].name} />
                    </div>
                    <h2>{speciesData[selectedSpecies].name}</h2>
                    <p className="habitat">{speciesData[selectedSpecies].habitat}</p>
                    <p className="role">{speciesData[selectedSpecies].role}</p>
                    <div className="button-container">
                        <button className="close-button" onClick={closeInfo}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Phytoplankton;
