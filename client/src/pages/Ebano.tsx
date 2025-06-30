import * as React from "react";
import "../styles/artist.scss";
import CosasQueBrillanImg from "../resources/cosas que brillan.jpg";
import oraleImg from "../resources/orale.png";
import l2poeImg from "../resources/l2poe.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Ebano: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
      <section className="song-section">
        <h3>COSAS QUE BRILLAN</h3>
        <p>Brillan las lágrimas en mi mejilla</p>
        <a
          href="https://open.spotify.com/intl-es/track/195Q9hV00YGlGTXWQ6GpwU?si=8b7d053624534a11"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar canción"
        >
          <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
        </a>
        <img src={CosasQueBrillanImg} />
      </section>

      <section className="song-section">
        <h3>Órale</h3>
        <p>Voy con Dios, dos son más que uno</p>
        <p>Voy con dos, no conozco a ninguno</p>
        <a
          href="https://open.spotify.com/intl-es/track/1qHT624mqQXTnuzO5kWFQC?si=a620c22c3e8b4271"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar canción"
        >
          <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
        </a>
        <img src={oraleImg}/>
      </section>
      <section className="song-section">
          <h3>Joven Jugador</h3>
          <p>Joven perdedor, perdió el brillo en sus dientes</p>
          <p>Pero no los enseñó, no habló con los agentes</p>
          <a
            href="https://open.spotify.com/intl-es/track/1TrSFCTp6I9yuro1W5JM2n?si=a0c4a8a082bd4c5e"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={l2poeImg} />
        </section>

        <section className="song-section">
        <h3>El Elegido</h3>
        <p>Elegido de Dios, soy su testaferro</p>
        <a
          href="https://open.spotify.com/intl-es/track/2iK8H7iIHH5Y8EcIfriGGJ?si=e60fb8c604854ade"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar canción"
        >
          <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
        </a>
        <img src={CosasQueBrillanImg} />
      </section>
      </div>
    </main>
  );
};

export default Ebano;
