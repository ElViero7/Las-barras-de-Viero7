// src/components/Header.tsx

import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="top-bar">
      <h1 className="top-bar-title">
        <Link to="/">Las Barras de Viero7</Link>
      </h1>
    </header>
  );
};

export default Header;
