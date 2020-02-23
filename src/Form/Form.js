import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  createReservation = () => {
    const { addReservation } = this.props
    const newReservation = { ...this.state, id: Date.now() }
    addReservation(newReservation)
  }

  render() {
    const { name, date, time, number } = this.state;
    return (
      <div>
        <input
          type='text'
          placeholder='Name'
          value={name}
          name='name'
          onChange={this.handleChange}
        />
        <input
          type='date'
          placeholder='Date'
          value={date}
          name='date'
          onChange={this.handleChange}
        />
        <input
          type='time'
          placeholder='Time'
          value={time}
          name='time'
          onChange={this.handleChange}
        />
        <input
          type='number'
          placeholder='Number of guests'
          value={number}
          name='number'
          onChange={this.handleChange}
        />
        <button onClick={this.createReservation}>Create reservation</button>
      </div>
    )
  }
}