import React, { Component } from 'react';
import { Reservations } from '../Reservations/Reservations'
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

  render() {
    const { reservations, loading } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

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
