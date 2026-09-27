import { useState } from "react";
import { supabase } from "../supabase";

function Reservations() {
  const [reservations, setReservations] = useState([]);

  async function getReservations() {
    const { data, error } = await supabase
      .from("reservations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Failed to retrieve reservations");
      return;
    }

    setReservations(data);
  }

  return (
    <main className="reservations-page">
      <h1>Reservations</h1>

      <button onClick={getReservations}>
        View Reservations
      </button>

      <div className="reservation-list">
        {reservations.map((reservation) => (
          <div
            className="reservation-card"
            key={reservation.id}
          >
            <h2>{reservation.name}</h2>
            <p>Phone: {reservation.phone}</p>
            <p>Guests: {reservation.guests}</p>
            <p>Date: {reservation.date}</p>
            <p>Time: {reservation.time}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Reservations;