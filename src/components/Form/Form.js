import React from "react";
import "./Form.css";
import { useState } from "react";

const Form = ({ addReservation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please, enter your name.");
      return;
    } else if (!email) {
      alert("Please, enter your email.");
      return;
    } else if (!day) {
      alert("Please, pick a date.");
      return;
    } else if (!time) {
      alert("Please, pick a time.");
      return;
    } else if (!guests) {
      alert("Please, select the number of guests.");
      return;
    }

    addReservation({ name, email, day, time, guests });
    setName("");
    setEmail("");
    setDay("");
    setTime("");
    setGuests("");
  };
  return (
    <div className="form-background">
      <form onSubmit={onSubmit}>
        <div className="form-control form-control-lg mb-3 ">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control form-control-lg mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control form-control-lg mb-3">
          <label className="form-label">Pick a date</label>
          <input
            type="date"
            className="form-control form-control-lg"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control form-control-lg mb-3">
          <label className="form-label">Pick a time</label>
          <input
            type="time"
            className="form-control form-control-lg"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="form-control form-control-lg">
          <label className="form-label-select">Number of Guests</label>
          <select
            className="form-select form-select-lg mb-3 select"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option defaultValue>None</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8 or more">8 or more</option>
          </select>
        </div>

        <input
          type="submit"
          value="Make Reservation"
          className="btn-lg btn-dark"
        />
      </form>
    </div>
  );
};

export default Form;
