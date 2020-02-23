import React, { Component } from 'react';
import { Reservations } from '../Reservations/Reservations'
import { Form } from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => this.setState({ reservations: data, loading: false }))
  }

  addReservation = reservation => {
    this.setState({ reservations: [...this.state.reservations, reservation]})
    this.postReservation(reservation)
  }

  postReservation = reservation => {
    const url = 'http://localhost:3001/api/v1/reservations'
    const options = {
      method: 'POST',
      body: JSON.stringify(reservation),
      headers: {
        'Content-Type': 'application/json'  
      }
    }
    
    return fetch(url, options)
            .then(res => {
              if(!res.ok) {
                throw Error('Error creating reservation')
              }
              return res.json()})
  }



  render() {
    const { reservations, loading } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        {!loading
        ? <div className='resy-container'>
        <Reservations props={reservations} />
      </div>
      :<h2>Loading...</h2>}
        
      </div>
    )
  }
}

export default App;
