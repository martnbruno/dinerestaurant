import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Reservation.css";

const Reservation = ({ reservation, deleteReservation }) => {
  return (
    <div id="container">
      <div id="reservation">
        <h3>{reservation.name}'s Reservation </h3>
        <p>Name: {reservation.name}</p>
        <p>Email: {reservation.email}</p>
        <p>Date: {reservation.day}</p>
        <p>Time: {reservation.time}</p>
        <p>Guests: {reservation.guests}</p>
        <h5>
          Cancel Reservation{" "}
          <FaTimes
            className="cancel"
            onClick={() => deleteReservation(reservation.id)}
          />
        </h5>
      </div>
    </div>
  );
};

export default Reservation;
