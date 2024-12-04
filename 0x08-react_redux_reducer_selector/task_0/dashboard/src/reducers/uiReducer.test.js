import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('should return the initial state when no action is passed', () => {
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should return the initial state when an unrelated action is passed', () => {
    const newState = uiReducer(initialState, { type: 'SELECT_COURSE' });
    expect(newState).toEqual(initialState);
  });

  it('should update isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const newState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.isNotificationDrawerVisible).toBe(true);
  });

  it('should update isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
    const state = { ...initialState, isNotificationDrawerVisible: true };
    const newState = uiReducer(state, { type: HIDE_NOTIFICATION_DRAWER });
    expect(newState.isNotificationDrawerVisible).toBe(false);
  });

  it('should update isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
    const newState = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(newState.isUserLoggedIn).toBe(true);
  });

  it('should update isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
    const newState = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(newState.isUserLoggedIn).toBe(false);
  });

  it('should update isUserLoggedIn to false when LOGOUT is passed', () => {
    const state = { ...initialState, isUserLoggedIn: true };
    const newState = uiReducer(state, { type: LOGOUT });
    expect(newState.isUserLoggedIn).toBe(false);
  });
});
