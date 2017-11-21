import React from 'react';

class ProjectsPage extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>Projects</h1>
        <div className="ExContainer">
          <div className="ExSection">
            <h2>Project-4</h2>
            <h3>Play-Gen Finder</h3>
            <p>A web app that lets you find playlists from people around you.</p>
            <a>https://playgenfinder.herokuapp.com/</a>
            <p>Built with: ReactJS, Express, Node.js, JavaScript, MongoDB, Mongoose
              HTML5, SCSS, WEBpack
              This app allows you to find users in any area you are in and lets you follow their playlists built using React JS and Express as the backend, you will be able to log in using Spotify and find music anywhere you are.
            </p>
          </div>
          <hr/>
          <div className="ExSection">
            <h2>Project-3</h2>
            <h3>Lost & Found pets</h3>
            <p>A Web app that allows you to find your pet.</p>
            <a>https://lost-and-found-pets.herokuapp.com/</a>
            <p>Built with: AngularJS, Express, Node.js, JavaScript, MongoDB, Mongoose
              HTML5, SCSS, Gulp and Bower
              This was a group project built to help pet owners to locate and find their lost pets. I did most of the styling for the whole app with advice from my team members using CSS and AngularJS.
            </p>
          </div>
          <hr/>
          <div className="ExSection">
            <h2>Project-2</h2>
            <h3>Learn to dance mzansi</h3>
            <p>A fun web app that teaches you how to dance on different styles of music from all around the world starting with Southern Africa.</p>
            <a>https://learndancemzansi.herokuapp.com/</a>
            <p>Built with: HTML5, Bulma BootStrap, JavaScript, ES6, jQuery 3.10, Mongoose
              Node, SCSS, Gulp and Yarn
              This was an individual project.
              I have used EJS together with jQuery and Ajax as a front-end tool to create a very slick looking web app that teaches you how to dance.
              Fully RESTful you can log in and log out securely and upload videos that are kept in the database that I created from scratch using MongoDB and Express.
            </p>
          </div>
          <hr/>
          <div className="ExSection">
            <h2>Project-1</h2>
            <h3>Pop The Balloons</h3>
            <p>A simple exciting game where you get to pop some balloons on your way home.</p>
            <a>https://pop-the-balloons.herokuapp.com/</a>
            <p>This was the first time I fully built something from ground up just using CSS and HTML.</p>
          </div>
          <hr/>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
