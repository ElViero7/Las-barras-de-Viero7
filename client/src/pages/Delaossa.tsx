import * as React from "react";
import "../styles/artist.scss";
import unPerroAndaluzImg from "../resources/un perro andaluiz.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Delaossa: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
        <section className="song-section">
          <h3>Mil en Multas</h3>
          <p>Yo ni por diez millones traiciono a un hermano</p>
          <a
            href="https://open.spotify.com/intl-es/track/6BMOMlSGpJ7cRip6CenUdc?si=e8bedf80d1d14aa2"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={unPerroAndaluzImg} />
        </section>
      </div>
    </main>
  );
};

export default Delaossa;
