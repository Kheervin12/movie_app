import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-link">
          <img
            src={"../../public/primeIcon.png"}
            alt="Prime Vault"
            style={{ height: "40px", width: "auto" }}
          />
          <h4>Prime Vault</h4>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
