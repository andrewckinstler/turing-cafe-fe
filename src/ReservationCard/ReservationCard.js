import React from 'react';

export const ReservationCard = ({ id, name, date, time, number }) => {
  return(
    <div>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
    </div>
  )
}