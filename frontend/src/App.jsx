import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage'; // Import your additional page
<<<<<<< HEAD
import Phytoplankton from './pages/Phytoplankton';
import AerosolData from './pages/AerosolData';
import CloudProperties from './pages/CloudProperties';
=======
import GamePage from './pages/GamePage';
>>>>>>> 060641e5263157121fbdd598795af817b65c8110

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
        <Route path="/phytoplankton" element={<Phytoplankton />} />
        <Route path="/aerosoldata" element={<AerosolData />} />
        <Route path="/cloudproperties" element={<CloudProperties />} />
=======
        <Route path="/gamepage" element={<GamePage   />} />
>>>>>>> 060641e5263157121fbdd598795af817b65c8110
      </Routes>
    </Router>
  );
}

export default App;
