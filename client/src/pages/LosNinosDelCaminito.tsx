import * as React from "react";
import "../styles/artist.scss";
import buonaSeraImg from "../resources/buonaSera.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const LNDC: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
        <section className="song-section">
          <h3>Buona Sera</h3>
          <p>No quiero ni comer ni tocar techo</p>
          <a
            href="https://open.spotify.com/intl-es/track/4SKUMitVRKtLFpyb8vAgtg?si=647ac78642b140ed"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={buonaSeraImg} />
        </section>
      </div>
    </main>
  );
};

export default LNDC;
