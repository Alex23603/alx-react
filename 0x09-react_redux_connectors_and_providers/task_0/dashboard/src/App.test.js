// App.test.js

import React from 'react';
import { fromJS } from 'immutable';
import { mapStateToProps } from './selectors'; // Adjust this import as needed
import { shallow } from 'enzyme';
import App from './App';

describe('mapStateToProps', () => {
  it('should return the correct props when isUserLoggedIn is true', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });

    const expectedProps = {
      isLoggedIn: true,
    };

    const props = mapStateToProps(state);

    expect(props).toEqual(expectedProps);
  });

  it('should return the correct props when isUserLoggedIn is false', () => {
    const state = fromJS({
      isUserLoggedIn: false,
    });

    const expectedProps = {
      isLoggedIn: false,
    };

    const props = mapStateToProps(state);

    expect(props).toEqual(expectedProps);
  });
});
