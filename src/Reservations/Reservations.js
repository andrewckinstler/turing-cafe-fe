import React from 'react';
import { ReservationCard } from '../ReservationCard/ReservationCard';
import './Reservations.css'

export const Reservations = ({ props, deleteReservation }) => {
  const reservations = props.map(res => {
    return <ReservationCard {...res} key={res.id} deleteReservation={deleteReservation} />
  })

  return (
    <section>
      {reservations}
    </section>
  )
}