import React, { Fragment } from 'react';
import './Login.css';

function Login() {
  return (
    <Fragment>
      <div className="App-login">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
