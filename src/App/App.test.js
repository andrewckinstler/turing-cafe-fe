import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

it('should match a snapshot', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
});

it('should update state when addReservation is called', () => {
  const wrapper = shallow(<App />)
  const mockReservation = {
    name: 'Sharon',
    date: '01/01',
    time: '8:00 pm',
    number: 6
  }
  const expected = [mockReservation]

  expect(wrapper.state('reservations')).toEqual([])
  wrapper.instance().addReservation(mockReservation)
  expect(wrapper.state('reservations')).toEqual(expected)
});
