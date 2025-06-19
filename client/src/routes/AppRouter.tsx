import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../layouts/TopAppBar';
import Home from '../pages/Home';
import Hoke from '../pages/Hoke';
import Cruzzi from '../pages/Cruzzi';
import Peke from '../pages/Peke';
import Abhir from '../pages/Abhir';
import Gloosito from '../pages/Gloosito';

const AppRouter = () => (
    <Router>
      <Header />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/hoke" element={<Hoke />} />
        <Route path="/cruzzi" element={<Cruzzi />} />
        <Route path="/peke" element={<Peke />} />
        <Route path="/abhir" element={<Abhir />} />
        <Route path="/gloosito" element={<Gloosito />} />
      </Routes>
    </Router>
);

export default AppRouter;
