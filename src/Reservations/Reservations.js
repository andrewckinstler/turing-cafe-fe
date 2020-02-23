import React from 'react';
import { ReservationCard } from '../ReservationCard/ReservationCard';

export const Reservations = props => {
  console.log(props)
  const reservations = props.props.map(res => {
    return <ReservationCard {...res} key={res.id} />
  })

  return (
    <div>
      <h2>Hello World</h2>
      {reservations}
    </div>
  )
}