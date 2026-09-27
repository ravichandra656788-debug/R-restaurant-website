import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <h1>Welcome to R Restaurant</h1>

      <p>
        Enjoy delicious food, comfortable dining and a memorable
        restaurant experience.
      </p>

      <Link to="/menu">
        <button>Explore Our Menu</button>
      </Link>
    </main>
  );
}

export default Home;