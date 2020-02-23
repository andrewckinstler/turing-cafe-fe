import React from 'react';
import { ReservationCard } from '../ReservationCard/ReservationCard';

export const Reservations = props => {
  const reservations = props.props.map(res => {
    return <ReservationCard {...res} key={res.id} />
  })

  return (
    <div>
      {reservations}
    </div>
  )
}