import * as React from "react";
import "../styles/artist.scss";
import domingoImg from "../resources/domingo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const ElVirtual: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
        <section className="song-section">
          <h3>Domingo</h3>
          <p>¿Cuántas veces yo te dije?</p>
          <p>¿Cuántas veces a mí me han dicho?</p>
          <p>¿Cuánto es lo que tú te exiges?</p>
          <p>¿Es real o es un capricho?</p>
          <a
            href="https://open.spotify.com/intl-es/track/6qIrbA5HoPllqwaYBZH2k1?si=0ae7f7d703654575"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={domingoImg}/>
        </section>
      </div>
    </main>
  );
};

export default ElVirtual;
