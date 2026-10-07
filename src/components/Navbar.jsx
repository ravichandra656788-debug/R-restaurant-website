import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>R Restaurant</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/meu">Menu</Link>
        <Link to="/resvation">Reserve Table</Link>
        <Link to="/reations">Reservations</Link>
      </div>
    </nav>
  );
}

export default Navbar;