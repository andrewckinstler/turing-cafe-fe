import React from 'react';
import { shallow } from 'enzyme'
import { ReservationCard } from './ReservationCard';

it('should match a snapshot', () => {
  const wrapper = shallow(<ReservationCard />)
  expect(wrapper).toMatchSnapshot()
});
