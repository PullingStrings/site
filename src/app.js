import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <header>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">Sibusiso Tito Zwane</a>
              </div>
              <ul className="nav navbar-nav">
                <li><Link to="/" className="navbar-item">Home</Link></li>
                <li><Link to="/about" className="navbar-item">About</Link></li>
                <li><Link to="/projects" className="navbar-item">Projects</Link></li>
                <li><Link to="/experience" className="navbar-item">Experience</Link></li>
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/projects" component={ProjectsPage}/>
          <Route path="/experience" component={ExperiencePage}/>
        </header>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
