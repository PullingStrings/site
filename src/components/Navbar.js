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
          <li><Link to="/about" className="navbar-item">About Me</Link></li>
          <li><Link to="/projects" className="navbar-item">Projects</Link></li>
          <li><Link to="/experience" className="navbar-item">Experience</Link></li>
        </ul>
      </div>
      {!Auth.isAuthenticated() && <Link to="/login" className="standard-button">Login</Link>}
      {!Auth.isAuthenticated() && <Link to="/register" className="standard-button">Register</Link>}
      {Auth.isAuthenticated() && <a href="#" onClick={logout} className="standard-button">Logout</a>}
    </nav>
  );
};

export default withRouter(Navbar);
