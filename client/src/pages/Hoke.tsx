import * as React from "react";
import "../styles/artist.scss";
import ersImg from "../resources/96ers.png";
import nadieVivoImg from "../resources/nadie vivo.jpg";
import culpableImg from "../resources/culpable.jpg";
import plusmarcaImg from "../resources/plusmarca.jpg";
import bboImg from "../resources/bbo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Hoke: React.FC = () => {
  return (
    <main>
      <div className="song-grid">
      <section className="song-section">
        <h3>96ers</h3>
        <p>Niños con los sueños rotos hacen videos y diseños locos</p>
        <p>A ver qué foto me brinda el hood hoy</p>
        <a
          href="https://open.spotify.com/intl-es/track/0nossc9MZd0RIbYZMrazge?si=dd8fb29d4e7347f4"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar canción"
        >
          <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
        </a>
        <img src={ersImg} alt="96ers portada" />
      </section>

      <section className="song-section">
        <h3>Nadie vivo</h3>
        <p>BBO, camina en línea recta</p>
        <p>Si eres recto nos cruzamos a la ida y a la vuelta</p>
        <a
          href="https://open.spotify.com/intl-es/track/1xB8r3iW4ZWRQD4NWYvLY0?si=0cd09e6ce28648f9"
          target="_blank"
          rel="noopener noreferrer"
          title="Escuchar canción"
        >
          <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
        </a>
        <img src={nadieVivoImg} alt="Nadie vivo portada" />
      </section>
      <section className="song-section">
          <h3>Culpable</h3>
          <p>Cafeína y Brugal, tensión en la cervical</p>
          <a
            href="https://open.spotify.com/intl-es/track/1TrSFCTp6I9yuro1W5JM2n?si=a0c4a8a082bd4c5e"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={culpableImg} />
        </section>
        <section className="song-section">
          <h3>Plusmarca</h3>
          <p>No sé la cara de mis ídolos, sólo su nombre</p>
          <a
            href="https://open.spotify.com/intl-es/track/1UwM3jgKeu5tsQ0NjZtHAz?si=69f48a56928d40e1"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={plusmarcaImg} />
        </section>
        <section className="song-section">
          <h3>TT</h3>
          <p>Todo por mi banda, controlando en corto</p>
          <p>Con una bola en el pie como Ronaldo el gordo</p>
          <a
            href="https://open.spotify.com/intl-es/track/6mQGOlMMCOMww9wMglS9FB?si=ad71a6a3ea644380"
            target="_blank"
            rel="noopener noreferrer"
            title="Escuchar canción"
          >
            <FontAwesomeIcon icon={faMusic} size="lg" color="#1db954" />
          </a>
          <img src={bboImg} />
        </section>
      </div>
    </main>
  );
};

export default Hoke;
