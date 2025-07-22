import * as React from "react";
import "../styles/artist.scss";
import elMasPekenoImg from "../resources/el mas pekeño de mi quinta.jpg";
import rafaelaImg from "../resources/rafaela.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Peke: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
        <section className="song-section">
          <h3>El más pekeño de mi Quinta</h3>
          <p>El portavoz de mi hermano si está ronco,</p>
          <p>si es que no tiene pa el kebab yo se lo pongo</p>
          <a
            href="https://open.spotify.com/intl-es/track/28te0koZCwjQZwb8vcwGSX?si=0b122f9032eb4826"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={elMasPekenoImg} alt="96ers portada" />
        </section>

        <section className="song-section">
          <h3>Splinter Cell</h3>
          <p>En mi grupo todos son cabras</p>
          <a
            href="https://open.spotify.com/intl-es/track/1HyGIcX02aKLR2SdYYB6mo?si=36a8f70749594fa3"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={rafaelaImg} alt="96ers portada" />
        </section>
      </div>
    </main>
  );
};

export default Peke;
