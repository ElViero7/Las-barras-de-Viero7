import * as React from "react";
import "../styles/artist.scss";
import elHombreHacePlanesImg from "../resources/el hombre hace planes.jpg";
import balonDeOroImg from "../resources/balon de oro.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Dano: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
        <section className="song-section">
          <h3>Why U Actin'?</h3>
          <p>Quieren hacer estos beats pero no son yo,</p>
          <p>quieren hacer estos hits pero no son Gloo</p>
          <a
            href="https://open.spotify.com/intl-es/track/1lza3Wuw5XIpnFKLKfZpOR?si=4d83741ad03e43e5"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={elHombreHacePlanesImg} />
        </section>
        <section className="song-section">
          <h3>BALÓN DE ORO</h3>
          <p>Pero es normal copiar a quien escuchas</p>
          <p>Si el Balón de Oro pilla el premio disfraza'o de Tupac</p>
          <a
            href="https://open.spotify.com/intl-es/track/6DJ8WwzePQDJN7BaFANfut?si=a3caae0bccd541c7"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={balonDeOroImg} />
        </section>
      </div>
    </main>
  );
};

export default Dano;
