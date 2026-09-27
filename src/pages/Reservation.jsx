import { useState } from "react";
import { supabase } from "../supabase";

function Reservation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  async function handleReservation(e) {
    e.preventDefault();

    if (!name || !phone || !guests || !date || !time) {
      alert("Please fill all the details");
      return;
    }

    const { error } = await supabase
      .from("reservations")
      .insert([
        {
          name,
          phone,
          guests: Number(guests),
          date,
          time,
        },
      ]);

    if (error) {
      console.error(error);
      alert("Reservation failed");
      return;
    }

    alert("Table reserved successfully!");

    setName("");
    setPhone("");
    setGuests("");
    setDate("");
    setTime("");
  }

  return (
    <main className="reservation-page">
      <h1>Reserve a Table</h1>

      <form
        className="reservation-form"
        onSubmit={handleReservation}
      >
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />

        <label>Number of Guests</label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button type="submit">
          Reserve Table
        </button>
      </form>
    </main>
  );
}

export default Reservation;