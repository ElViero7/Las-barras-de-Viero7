import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../layouts/TopAppBar';
import Home from '../pages/Home';
import Hoke from '../pages/Hoke';
import Cruzzi from '../pages/Cruzzi';
import Peke from '../pages/Peke';
import Abhir from '../pages/Abhir';
import Gloosito from '../pages/Gloosito';
import Agorazein from '../pages/Agorazein';
import Dano from '../pages/Dano';
import Delaossa from '../pages/Delaossa';
import NicoMiseria from '../pages/NicoMiseria';
import Ebano from '../pages/Ebano';

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
        <Route path="/agorazein" element={<Agorazein />} />
        <Route path="/dano" element={<Dano />} />
        <Route path="/delaossa" element={<Delaossa />} />
        <Route path="/nicoMiseria" element={<NicoMiseria />} />
        <Route path="/ebano" element={<Ebano />} />
      </Routes>
    </Router>
);

export default AppRouter;
