import * as React from "react";
import "../styles/artist.scss";
import suvImg from "../resources/suv.jpg";
import limaImg from "../resources/lima y cilantro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";


const Gloosito: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
        <section className="song-section">
          <h3>As Bestas</h3>
          <p>Lo que tú mueves al mes, aquí se nos va en muestras</p>
          <a
            href="https://open.spotify.com/intl-es/track/4gXmSU1NjLAWmVPIBUEIx6?si=4fbd820a6d5f4b05"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={suvImg} />
        </section>
        <section className="song-section">
          <h3>Vishnu</h3>
          <p>Solo mancho cuando celebro, y celebro to's los días</p>
          <a
            href="https://open.spotify.com/intl-es/track/7HTpjFC4UDd0gbqq5PvrAo?si=aedb6737983140e6"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={suvImg} />
        </section>
        <section className="song-section">
          <h3>Lima y Cilantro</h3>
          <p>Y se me prende todo el DMT</p>
          <a
            href="https://open.spotify.com/intl-es/track/3qPbsefas9WFdhUSkweuX2?si=625771f731594c2d"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={limaImg} />
        </section>
      </div>
    </main>
  );
};

export default Gloosito;
