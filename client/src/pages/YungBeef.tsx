import * as React from "react";
import "../styles/artist.scss";
import freeMollyImg from "../resources/freemolly.png";
import elPapasitoImg from "../resources/elPapasito.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const YungBeef: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
        <section className="song-section">
          <h3>#Freemolly (Intro)</h3>
          <p>Triste al ver que no me quiere, alegre porque hay más mujere'</p>
          <a
            href="https://open.spotify.com/intl-es/track/750wjOrJwSgnHsbSMX8HyP?si=c47b46837e1c480d"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={freeMollyImg} />
        </section>

        <section className="song-section">
          <h3>El Papasito Bars</h3>
          <p>Dame billetes, puta, no me des consejos</p>
          <a
            href="https://open.spotify.com/intl-es/track/7iqLluwurbhIuEkJO3vF9K?si=62f8a3e4f178415f"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={elPapasitoImg} />
        </section>
      </div>
    </main>
  );
};

export default YungBeef;
