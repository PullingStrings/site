import React from 'react';

class ExperiencePage extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>Experience</h1>
        <div className="ExContainer">
          <h2>Web Development at General Assembly</h2>
          <h3>July 2017 - Nov 2017</h3>
          <p>An intensive three-month full-time programme, teaching the fundamentals of
            Web Development through practical application delivered by industry
            experts
          </p>
          <p>In the three months,
            our responsibilities and assignments
            were to create code and deploy 4 web apps:
          </p>
          <ul>
            <li>NodeJs</li>
            <li>Express</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ExperiencePage;
