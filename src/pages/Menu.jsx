function Menu() {
  const foods = [
    {
      name: "Paneer Butter Masala",
      price: "₹180",
    },
    {
      name: "Veg Biryani",
      price: "₹160",
    },
    {
      name: "Masala Dosa",
      price: "₹90",
    },
    {
      name: "Chicken Biryani",
      price: "₹220",
    },
  ];

  return (
    <main className="menu-page">
      <h1>Our Menu</h1>

      <div className="menu-grid">
        {foods.map((food) => (
          <div className="food-card" key={food.name}>
            <h2>{food.name}</h2>
            <p>{food.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Menu;