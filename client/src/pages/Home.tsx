import { Link } from "react-router-dom";
import "../styles/Home.scss";
import hokeImg from "../resources/hoke.jpg";
import cruzImg from "../resources/cruzzi.jpg";
import pekeImg from "../resources/peke.jpg";
import abhirImg from "../resources/abhir.jpg";
import gloositoImg from "../resources/gloostio.jpg";
import danoImg from "../resources/dano.jpg";
import nicoMiseriaImg from "../resources/nicoMiseria.jpg";
import agzImg from "../resources/agz.jpg";
import delaossaImg from "../resources/delaossa.jpg";

const Home = () => {
  return (
    <main className="artist-grid">
      <Link to="/hoke" className="artist-card">
        <img src={hokeImg} alt="Hoke" />
        <h3>Hoke</h3>
      </Link>

      <Link to="/cruzzi" className="artist-card">
        <img src={cruzImg} alt="Cruz Cafune" />
        <h3>Cruz Cafune</h3>
      </Link>

      <Link to="/peke" className="artist-card">
        <img src={pekeImg} alt="Ill Pekeño" />
        <h3>Ill Pekeño</h3>
      </Link>

      <Link to="/abhir" className="artist-card">
        <img src={abhirImg} alt="Abhir" />
        <h3>Abhir</h3>
      </Link>

      <Link to="/gloosito" className="artist-card">
        <img src={gloositoImg} alt="Gloosito" />
        <h3>Gloosito</h3>
      </Link>

      <Link to="/agorazein" className="artist-card">
        <img src={agzImg} alt="agorazein" />
        <h3>Agorazein</h3>
      </Link>

      <Link to="/dano" className="artist-card">
        <img src={danoImg} alt="dano" />
        <h3>Dano</h3>
      </Link>

      <Link to="/delaossa" className="artist-card">
        <img src={delaossaImg} alt="delaossa" />
        <h3>Delaossa</h3>
      </Link>

      <Link to="/nicoMiseria" className="artist-card">
        <img src={nicoMiseriaImg} alt="nicoMiseria" />
        <h3>Nico Miseria</h3>
      </Link>
    </main>
  );
};

export default Home;
