import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="maindiv">
                 <div className="card">
                <h3 className="card-title">Skills</h3>
                <div className="list-of-skills">
            <p className="skill"><i className="devicon-react-original-wordmark colored"></i></p>
            <p className="skill"><i className="devicon-nodejs-plain-wordmark"></i></p>
            <p className="skill"><i className="devicon-express-original-wordmark"></i></p>
            <p className="skill"><i className="devicon-javascript-plain colored"></i></p>
            <p className="skill"><i className="devicon-sequelize-plain-wordmark colored"></i></p>
            <p className="skill"><i className="devicon-mongodb-plain-wordmark colored"></i></p>
            <p className="skill"><i className="devicon-trello-plain-wordmark"></i></p>
            <p className="skill"><i className="devicon-css3-plain colored"></i></p>
            <p className="skill"><i className="devicon-html5-plain colored"></i></p>
            <p className="skill"><i className="devicon-mocha-plain colored"></i></p>
            <p className="skill"><i className="devicon-bootstrap-plain-wordmark"></i></p>
            <p className="skill"><i className="devicon-git-plain-wordmark colored"></i></p>
                </div>
            </div>
            </div>
        );
    }
}

export default About;