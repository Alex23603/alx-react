// App.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uiReducer from './reducers/uiReducer'; // Import your uiReducer

// Define mapStateToProps function
const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.isLoggedIn
});

// Connect the component to the Redux store
const App = ({ isLoggedIn }) => {
  return (
    <div>
      <h1>Welcome {isLoggedIn ? 'back!' : 'Guest'}</h1>
      {/* Other UI components */}
    </div>
  );
};

// Specify propTypes for the component
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

// Connect App component to the Redux store
export default connect(mapStateToProps)(App);
