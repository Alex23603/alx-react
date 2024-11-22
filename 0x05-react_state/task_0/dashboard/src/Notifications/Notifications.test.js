import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('should call handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={jest.fn()} />);
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleDisplayDrawer={jest.fn()}
        handleHideDrawer={handleHideDrawer}
      />
    );
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
