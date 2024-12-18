import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('contains two input tags and two label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
