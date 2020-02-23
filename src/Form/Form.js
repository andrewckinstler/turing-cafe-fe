import React, { Component } from 'react';
import './Form.css'

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

  resetInputs = () => {
    this.setState({ name: '', date: '', time: '', number: ''})
  }

  createReservation = () => {
    const { addReservation } = this.props
    const newReservation = { ...this.state, id: Date.now() }
    addReservation(newReservation)
    this.resetInputs() 
  }

  render() {
    const { name, date, time, number } = this.state;
    return (
      <div className='form-box'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          name='name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='Date (mm/dd)'
          value={date}
          name='date'
          onChange={this.handleChange}
        />
        <input
          type='text'
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
        <button 
          className='create'
          onClick={this.createReservation}>
            Create reservation
        </button>
      </div>
    )
  }
}