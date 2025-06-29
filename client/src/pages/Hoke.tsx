import * as React from "react";
import "../styles/artist.scss";
import ersImg from "../resources/96ers.png";
import nadieVivoImg from "../resources/nadie vivo.jpg";
import culpableImg from "../resources/culpable.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Hoke: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
      <section className="song-section">
        <h3>96ers</h3>
        <p>Niños con los sueños rotos hacen videos y diseños locos</p>
        <p>A ver qué foto me brinda el hood hoy</p>
        <a
          href="https://open.spotify.com/intl-es/track/0nossc9MZd0RIbYZMrazge?si=dd8fb29d4e7347f4"
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
          href="https://open.spotify.com/intl-es/track/1xB8r3iW4ZWRQD4NWYvLY0?si=0cd09e6ce28648f9"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar canción"
        >
          <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
        </a>
        <img src={nadieVivoImg} alt="Nadie vivo portada" />
      </section>
      <section className="song-section">
          <h3>Culpable</h3>
          <p>Cafeína y Brugal, tensión en la cervical</p>
          <a
            href="https://open.spotify.com/intl-es/track/1TrSFCTp6I9yuro1W5JM2n?si=a0c4a8a082bd4c5e"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={culpableImg} />
        </section>
      </div>
    </main>
  );
};

export default Hoke;
