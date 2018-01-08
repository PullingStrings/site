import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.logout();
    history.push('/');
  }

  return(
    <nav>
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Time Line</a>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/" className="navbar-item">Home</Link></li>
          <li>{!Auth.isAuthenticated() &&
            <Link to="/login" className="standard-button">Login</Link>}</li>
          <li>{!Auth.isAuthenticated() &&
            <Link to="/register" className="standard-button">Register</Link>}</li>
          <li>{Auth.isAuthenticated() && <a href="#" onClick={logout} className="standard-button">Logout</a>}</li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
