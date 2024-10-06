import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage'; // Import your additional page
import Phytoplankton from './pages/Phytoplankton';
import AerosolData from './pages/AerosolData';
import CloudProperties from './pages/CloudProperties';
import GamePage from './pages/GamePage';
import CloudActivity from './pages/CloudActivity';
import OceanExplorers from './pages/OceanExplorers';
import OceanCard from './pages/OceanCard';

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
        <Route path="/oceanexplorer" element={<OceanExplorers  />} />
        <Route path="/oceancard" element={<OceanCard   />} />
        <Route path="/phytolesson" element={<PythoData />} />
      </Routes>
    </Router>
  );
}

export default App;
