import * as React from "react";
import "../styles/artist.scss";
import tercerVeranoImg from "../resources/tercer verano del amor.jpg";
import elPeriploImg from "../resources/el periplo dl heroe.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const NicoMiseria: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
        <section className="song-section">
          <h3>Isabel</h3>
          <p>Nadie elige su cruz, solo la forma de llevarla con cierta elegancia</p>
          <a
            href="https://open.spotify.com/intl-es/track/5MU404gq1tr5Zoz7ikvJdO?si=6893aa5f0f784306"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={tercerVeranoImg} />
        </section>

        <section className="song-section">
          <h3>El Rapto de Perséfone</h3>
          <p>La belleza está en los ojos de quien mira</p>
          <a
            href="https://open.spotify.com/intl-es/track/5F4EwOx76im3YRjGDmp6Lx?si=f5e3f1bb0d164c16"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={elPeriploImg} />
        </section>
      </div>
    </main>
  );
};

export default NicoMiseria;
