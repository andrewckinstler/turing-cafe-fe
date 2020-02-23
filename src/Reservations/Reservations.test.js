import React from 'react';
import { shallow } from 'enzyme'
import { Reservations} from './Reservations';

it('should match a snapshot', () => {
  const mockReservations = [
    {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
    },
    {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
    }
  ]

  const wrapper = shallow(<Reservations props={mockReservations} />)
  expect(wrapper).toMatchSnapshot()
});
