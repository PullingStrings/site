import React from 'react';


class HomePage extends React.Component {
  state = {
    projects_second: [
      {
        key: 1,
        image: '../src/images/camaraBaby.jpeg',
        name: 'Take a photo',
        desc: 'Take a photo of your baby when they born',
        link: 'https://learndancemzansi.herokuapp.com/',
        fontColor: 'white'
      },
      {
        key: 2,
        image: '../src/images/babyImage.jpeg',
        name: 'See if you like it',
        desc: 'Edit or re take a photo',
        link: 'https://lost-and-found-pets.herokuapp.com/',
        fontColor: 'white'
      },
      {
        key: 3,
        image: '../src/images/babyFace.jpg',
        name: 'Save it on own cloud',
        desc: 'Always have memories of your baby here',
        link: 'https://lost-and-found-pets.herokuapp.com/',
        fontColor: 'white'
      }
    ]
  }
  render() {
    return (
      <main>
        <div className="container-fluid bg-3 text-center">
          <div className="row">
            {this.state.projects_second.map(project => {
              return (
                <div key={project.key} className="col-sm-4">
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
                        border: '3px solid white'
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
