import React from 'react';

// import { Link} from 'react-router-dom';
// import pic1 from '../images/PopBallonsProject.png';
// import pic2 from '../images/LearnTo.jpg';
// import pic3 from '../images/homepagePic.jpg';
// import pic4 from '../images/homepagePic.jpg';
// import pic5 from '../images/homepagePic.jpg';
// import pic6 from '../images/homepagePic.jpg';


class HomePage extends React.Component {

  render() {
    return (
      <main>
        <div style={{backgroundImage: 'url("../src/images/outsideview.jpg")', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundPositionY: 'center'}} className="jumbotron">
          <div className="container text-center">
            <h1>Tito Here...</h1>
            <p>Full Stack Web developer that loves art, music and travel.</p>
          </div>
        </div>
        <div className="container-fluid bg-3 text-center">
          <h3>Some of my Work</h3>
          <div className="row">
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"  alt="Work"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive" alt="Work2"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive" alt="Work3"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive" alt="Work4"/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="container-fluid bg-3 text-center">
          <div className="row">
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"  alt="Work5"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"  alt="Work6"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"  alt="Work7"/>
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive" alt="Work8"/>
            </div>
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
