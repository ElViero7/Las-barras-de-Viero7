import * as React from "react";
import "../styles/artist.scss";
import caManoloImg from "../resources/ca manolo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Abhir: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
      <section className="song-section">
        <h3>Ca manolo</h3>
    <p>Todos quieren ser duros y los más duro es ser noble</p>
        <a
          href="https://open.spotify.com/intl-es/track/0lJHvFF2Jur0KowHti4jUg?si=464a0cd672a44e7a"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar canción"
        >
          <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
        </a>
        <img src={caManoloImg} alt="96ers portada" />
      </section>
      </div>

    </main>
  );
};

export default Abhir;
