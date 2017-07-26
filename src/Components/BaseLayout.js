import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseLayout extends Component {
    render() {
        return (
            <div>
                <h1>Clark McAdoo</h1>
                <div className="button-div">
                <div><Link to="/home"><button className="btn btn-secondary btn-lg"><i className="fa fa-home" aria-hidden="true"></i></button></Link></div>
                <div><Link to="/about"><button className="btn btn-secondary btn-lg"><i className="fa fa-list" aria-hidden="true"></i></button></Link></div>
                <div><Link to="/profile"><button className="btn btn-secondary btn-lg"><i className="fa fa-user" aria-hidden="true"></i></button></Link></div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default BaseLayout;