import React from 'react';
import { ReservationCard } from '../ReservationCard/ReservationCard';

export const Reservations = ({ props, deleteReservation }) => {
  const reservations = props.map(res => {
    return <ReservationCard {...res} key={res.id} deleteReservation={deleteReservation} />
  })

  return (
    <div>
      {reservations}
    </div>
  )
}