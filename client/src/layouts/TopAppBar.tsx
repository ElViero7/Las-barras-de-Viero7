import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>
        <Link to="/" style={styles.link}>
          Las Barras de Viero7
        </Link>
      </h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "20px 0",
    textAlign: "center" as const,
    position: "sticky" as const,
    top: 0,
    zIndex: 1000,
  },
  title: {
    margin: 0,
    fontSize: "2.5rem",
    textTransform: "uppercase" as const,
    letterSpacing: "2px",
    fontWeight: "bold",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Header;
