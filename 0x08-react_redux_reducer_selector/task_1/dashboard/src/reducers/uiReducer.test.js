import { Map } from 'immutable';
import uiReducer from './uiReducer';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  });

  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    const newState = uiReducer(initialState, action);
    expect(newState.toJS().isNotificationDrawerVisible).toBe(true); // toJS converts Immutable Map to plain JS object
  });

  it('should handle HIDE_NOTIFICATION_DRAWER action', () => {
    const action = { type: 'HIDE_NOTIFICATION_DRAWER' };
    const newState = uiReducer(initialState.set('isNotificationDrawerVisible', true), action);
    expect(newState.toJS().isNotificationDrawerVisible).toBe(false);
  });

  it('should handle LOGIN_SUCCESS action', () => {
    const action = { type: 'LOGIN_SUCCESS' };
    const newState = uiReducer(initialState, action);
    expect(newState.toJS().isUserLoggedIn).toBe(true);
  });

  it('should handle LOGIN_FAILURE action', () => {
    const action = { type: 'LOGIN_FAILURE' };
    const newState = uiReducer(initialState, action);
    expect(newState.toJS().isUserLoggedIn).toBe(false);
  });

  it('should handle LOGOUT action', () => {
    const action = { type: 'LOGOUT' };
    const newState = uiReducer(initialState.set('isUserLoggedIn', true), action);
    expect(newState.toJS().isUserLoggedIn).toBe(false);
  });
});

