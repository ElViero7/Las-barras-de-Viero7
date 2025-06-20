import * as React from "react";
import "../styles/artist.scss";
import deporvidasImg from "../resources/deporvidas.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Cruzzi: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
      <section className="song-section">
        <h3>Deporvidas</h3>
        <p>Yo soy un real desde el útero</p>
        <a
          href="https://open.spotify.com/intl-es/track/3m074dbYxbEfrPdbCdhnCS?si=39fdbf3a892440af"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar canción"
        >
          <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
        </a>
        <img src={deporvidasImg} alt="96ers portada" />
      </section>
      </div>

    </main>
  );
};

export default Cruzzi;
