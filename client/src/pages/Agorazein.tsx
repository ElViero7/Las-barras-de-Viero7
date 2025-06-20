import * as React from "react";
import "../styles/artist.scss";
import kingOfRedImg from "../resources/kingOfRed.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Agorazein: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
        <section className="song-section">
          <h3>Ruidos</h3>
          <p>Aqui el respeto no se muestra, se merece</p>
          <a
            href="https://open.spotify.com/intl-es/track/5Fp30VjVx9vQOWhlmqOt6U?si=ea4fae2f07264c95"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={kingOfRedImg} />
        </section>
      </div>
    </main>
  );
};

export default Agorazein;
