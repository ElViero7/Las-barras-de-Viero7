import * as React from "react";
import "../styles/artist.scss";
import laEspaldaImg from "../resources/laEspaldaDelSol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Diego900: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
        <section className="song-section">
          <h3>Créditos (José Mercé)</h3>
          <p>Tú haces tus fallos, pa, tus fallos no te hacen</p>
          <a
            href="https://open.spotify.com/intl-es/track/3tWRb2bl4xoztamSghzEET?si=c29bbc3d1c60420b"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={laEspaldaImg} />
        </section>
      </div>
    </main>
  );
};

export default Diego900;
