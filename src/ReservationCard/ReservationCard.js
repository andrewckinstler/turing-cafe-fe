import React from 'react';

export const ReservationCard = ({ id, name, date, time, number, deleteReservation }) => {
  return(
    <div>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => deleteReservation(id)}>Cancel reservation</button>
    </div>
  )
}