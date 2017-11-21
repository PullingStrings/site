import React from 'react';


class HomePage extends React.Component {
  state = {
    projects_first: [
      {
        key: 1,
        image: '../src/images/NafasiArtSpaceProject.png',
        name: 'Nafasi Art Space',
        desc: 'Created a website for the organisation',
        link: '',
        fontColor: '#bd6320'
      },
      {
        key: 2,
        image: '../src/images/CareYouthProject.png',
        name: 'Care Youth',
        desc: 'Did this project for the Care Youth Organisation',
        link: '',
        fontColor: '#bd6320'
      },
      {
        key: 3,
        image: '../src/images/PopBallonsProject1.png',
        name: 'If you wanna play',
        desc: 'This game pops balloons',
        link: 'https://pop-the-balloons.herokuapp.com/',
        fontColor: '#6428ab'
      },
      {
        key: 4,
        image: '../src/images/PlayGenProject4.png',
        name: 'Generate your playlist',
        desc: 'This app generates playlists from nearby users',
        link: 'https://playgenfinder.herokuapp.com/',
        fontColor: '#30a055'
      }
    ],
    projects_second: [
      {
        key: 1,
        image: '../src/images/LearnToDanceProject2.png',
        name: 'Learn to dance',
        desc: 'This web app is a tool to learn how to dance',
        link: 'https://learndancemzansi.herokuapp.com/',
        fontColor: 'white'
      },
      {
        key: 2,
        image: '../src/images/LostandFoundPetsProject3.png',
        name: 'Lost a pet, find it here',
        desc: 'This app finds lost pets',
        link: 'https://lost-and-found-pets.herokuapp.com/',
        fontColor: 'white'
      }
    ]
  }
  render() {
    return (
      <main>
        <div
          style={{
            backgroundImage: 'url("../src/images/outsideview.jpg")',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center'
          }}
          className="jumbotron">
          <div className="container text-center">
            <h1>Tito Here...</h1>
            <p>Full Stack Web developer that loves art, music and travel.</p>
          </div>
        </div>

        <div className="container-fluid bg-3 text-center">
          <h3>Some of my Work</h3>
          <div className="row">
            {this.state.projects_first.map(project => {
              return (
                <div key={project.key} className="col-sm-3">
                  <h1>{project.name}</h1>
                  <p>{project.desc}</p>
                  <a
                    style={{textDecoration: 'none'}}href={project.link} target="_blank">
                    <div
                      className="projectImage"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundColor: '#bbb',
                        backgroundBlendMode: 'soft-light',
                        height: '35vh',
                        backgroundSize: 'cover',
                        border: '1px solid black'
                      }}>
                      <p
                        style={{
                          color: `${project.fontColor}`}}>{project.name}
                      </p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container-fluid bg-3 text-center">
          <div className="row">
            {this.state.projects_second.map(project => {
              return (
                <div key={project.key} className="col-sm-6">
                  <h1>{project.name}</h1>
                  <p>{project.desc}</p>
                  <a
                    style={{textDecoration: 'none'}}href={project.link} target="_blank">
                    <div
                      className="projectImage"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundColor: 'hsla(0, 0%, 3%, 0.3411764705882353)',
                        backgroundBlendMode: 'color',
                        height: '50vh',
                        backgroundSize: 'cover',
                        border: '1px solid black'
                      }}>
                      <p
                        style={{
                          color: `${project.fontColor}`}}>{project.name}
                      </p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <footer>
          <p>Get in touch with me here</p>
          <i className="fa fa-github fa-x2" aria-hidden="true"></i>
          {' '}
          <i className="fa fa-linkedin fa-x2" aria-hidden="true"></i>
        </footer>
      </main>
    );
  }
}

export default HomePage;
