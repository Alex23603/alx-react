import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const Notifications = ({ displayDrawer, handleDisplayDrawer, handleHideDrawer }) => {
  return (
    <div className="Notifications">
      {!displayDrawer ? (
        <div
          className="menuItem"
          onClick={handleDisplayDrawer}
          onKeyDown={handleDisplayDrawer}
          role="button"
          tabIndex="0"
        >
          Your notifications
        </div>
      ) : null}
      {displayDrawer ? (
        <div className="NotificationPanel">
          <button
            aria-label="Close"
            onClick={handleHideDrawer}
          >
            Close
          </button>
          <p>Here is the list of notifications</p>
        </div>
      ) : null}
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
