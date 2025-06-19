import * as React from "react";
import "../styles/artist.scss";
import ersImg from "../resources/96ers.png";
import nadieVivoImg from "../resources/nadie vivo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Hoke: React.FC = () => {
  return (
    <main>
      <section className="song-section">
        <h3>96ers</h3>
        <p>Niños con los sueños rotos hacen videos y diseños locos</p>
        <p>A ver qué foto me brinda el hood hoy</p>
        <a
          href="https://open.spotify.com/track/0nossc9MZd0RIbYZMrazge"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar canción"
        >
          <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
        </a>
        <img src={ersImg} alt="96ers portada" />
      </section>

      <section className="song-section">
        <h3>Nadie vivo</h3>
        <p>BBO, camina en línea recta</p>
        <p>Si eres recto nos cruzamos a la ida y a la vuelta</p>
        <a
          href="https://open.spotify.com/track/1xB8r3iW4ZWRQD4NWYvLY0"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar canción"
        >
          <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
        </a>
        <img src={nadieVivoImg} alt="Nadie vivo portada" />
      </section>
    </main>
  );
};

export default Hoke;
