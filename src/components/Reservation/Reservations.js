import React from "react";
import Reservation from "./Reservation";

const Reservations = ({ reservations, deleteReservation }) => {
  return (
    <div className="reservations-container">
      {reservations.map((reservation) => (
        <Reservation
          key={reservation.id}
          reservation={reservation}
          deleteReservation={deleteReservation}
        />
      ))}
    </div>
  );
};

export default Reservations;
