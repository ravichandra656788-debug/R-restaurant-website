import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>R Restaurant</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reserve Table</Link>
        <Link to="/reservations">Reservations</Link>
      </div>
    </nav>
  );
}

export default Navbar;