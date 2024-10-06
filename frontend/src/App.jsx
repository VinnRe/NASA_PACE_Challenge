import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage'; // Import your additional page
import Phytoplankton from './pages/Phytoplankton';
import AerosolData from './pages/AerosolData';
import CloudProperties from './pages/CloudProperties';
import GamePage from './pages/GamePage';
import CloudActivity from './pages/CloudActivity';
<<<<<<< HEAD
import OceanExplorers from './pages/OceanExplorers';
=======
import OceanCard from './pages/OceanCard';
>>>>>>> 19de088520785f298949eae07351f7c1afcb5d6c

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/phytoplankton" element={<Phytoplankton />} />
        <Route path="/aerosoldata" element={<AerosolData />} />
        <Route path="/cloudproperties" element={<CloudProperties />} />
        <Route path="/gamepage" element={<GamePage   />} />
        <Route path="/cloudactivity" element={<CloudActivity   />} />
<<<<<<< HEAD
        <Route path="/oceanexplorer" element={<OceanExplorers  />} />
=======
        <Route path="/oceancard" element={<OceanCard   />} />
>>>>>>> 19de088520785f298949eae07351f7c1afcb5d6c
      </Routes>
    </Router>
  );
}

export default App;
