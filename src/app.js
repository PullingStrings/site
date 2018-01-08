import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <header>
          <Navbar />
          <Route exact path="/" component={HomePage}/>
        </header>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
