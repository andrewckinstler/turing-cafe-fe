import React from 'react';
import { shallow } from 'enzyme'
import { Form } from './Form';

it('should match a snapshot', () => {
  const wrapper = shallow(<Form />)
  expect(wrapper).toMatchSnapshot()
});

it('should change state when handleChange is called', () => {
  const wrapper = shallow(<Form />)
  const mockEvent = { target: { name: 'name', value: 'Sharon'} };
  const expected = 'Sharon';

  wrapper.instance().handleChange(mockEvent);

  expect(wrapper.state('name')).toEqual(expected);
});