import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage'; 
import Phytoplankton from './pages/Phytoplankton';
import AerosolData from './pages/AerosolData';
import CloudProperties from './pages/CloudProperties';
import GamePage from './pages/GamePage';
import CloudActivity from './pages/CloudActivity';
import OceanExplorers from './pages/OceanExplorers';
import PhytoData from './pages/Lesson Material/Pytho';
import Aerosol from './pages/Lesson Material/Aerosol';
import Ocean from './pages/Lesson Material/Ocean';
import Clouds from './pages/Lesson Material/Clouds';

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
        <Route path="/phytolesson" element={<PhytoData />} />
        <Route path="/aerosollesson" element={<Aerosol />} />
        <Route path="/oceanlesson" element={<Ocean />} />
        <Route path="/cloudslesson" element={<Clouds />} />
      </Routes>
    </Router>
  );
}

export default App;
