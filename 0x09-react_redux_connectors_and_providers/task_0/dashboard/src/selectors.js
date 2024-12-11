// selectors.js
import { fromJS } from 'immutable';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
});
