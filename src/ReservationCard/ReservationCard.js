import React from 'react';
import './ReservationCard.css'

export const ReservationCard = ({ id, name, date, time, number, deleteReservation }) => {
  return(
    <article>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button 
        className='delete'
        onClick={() => deleteReservation(id)}>
          Cancel reservation
      </button>
    </article>
  )
}