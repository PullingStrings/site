import React from 'react';


class HomePage extends React.Component {
  state = {
    projects_first: [
      {
        key: 1,
        image: '../src/images/PopBallonsProject1.png',
        name: 'Project One',
        desc: 'This game pops balloons',
        link: 'https://pop-the-balloons.herokuapp.com/',
        fontColor: 'white'
      },
      {
        key: 2,
        image: '../src/images/LearnToDanceProject2.png',
        name: 'Project Two',
        desc: 'This web app is a tool to learn how to dance',
        link: 'https://learndancemzansi.herokuapp.com/',
        fontColor: 'black'
      },
      {
        key: 3,
        image: '../src/images/LostandFoundPetsProject3.png',
        name: 'Project Three',
        desc: 'This app finds lost pets',
        link: 'https://lost-and-found-pets.herokuapp.com/',
        fontColor: 'white'
      },
      {
        key: 4,
        image: '../src/images/PlayGenProject4.png',
        name: 'Project Four',
        desc: 'This app generates playlists from nearby users',
        link: 'https://playgenfinder.herokuapp.com/',
        fontColor: 'black'
      }
    ],
    projects_second: [
      {
        key: 1,
        image: '../src/images/NafasiArtSpaceProject.png',
        name: 'Nafasi Art Space',
        desc: 'Created a website for the organisation',
        link: ''
      },
      {
        key: 2,
        image: '../src/images/CareYouthProject.png',
        name: 'Care Youth',
        desc: 'Did this project for the Care Youth Organisation',
        link: ''
      },
      {
        key: 3,
        image: '../src/images/Standing.jpg',
        name: 'Standing',
        desc: 'Just me standing doing nothing',
        link: ''
      },
      {
        key: 4,
        image: '../src/images/homepagePic.jpg',
        name: 'Myself',
        desc: 'Look at this sexy mofo',
        link: ''
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
                  <p>{project.description}</p>
                  <a style={{textDecoration: 'none'}}href={project.link} target="_blank">
                    <div className="projectImage" style={{height: '20vh', background: `url(${project.image})`, backgroundSize: 'cover'}}>
                      <p style={{color: `${project.fontColor}`}}>{project.name}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <hr/>

        <div className="container-fluid bg-3 text-center">
          <div className="row">
            {this.state.projects_second.map(project => {
              return (
                <div key={project.key} className="col-sm-3">
                  <h1>{project.name}</h1>
                  <p>{project.desc}</p>
                  <img src={project.image} />
                </div>
              );
            })}
          </div>
        </div>

        <footer>
          <p>Get in touch with me here</p>
          <i className="fa fa-github" aria-hidden="true"></i>
          {' '}
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </footer>
      </main>
    );
  }
}

export default HomePage;
