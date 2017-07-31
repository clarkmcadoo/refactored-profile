import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BaseLayout extends Component {
    render() {
        return (
            <div className="maindiv">
                <h1>Clark McAdoo</h1>
                <div className="button-div">
                <div><NavLink to="/"><button className="btn btn-secondary btn-lg homebutton"><i className="fa fa-home" aria-hidden="true"></i></button></NavLink></div>
                <div><NavLink to="/about"><button className="btn btn-secondary btn-lg aboutbutton"><i className="fa fa-list" aria-hidden="true"></i></button></NavLink></div>
                <div><NavLink to="/profile"><button className="btn btn-secondary btn-lg profilebutton"><i className="fa fa-user" aria-hidden="true"></i></button></NavLink></div>
                <div><NavLink to="/contacts"><button className="btn btn-secondary btn-lg profilebutton"><i className="fa fa-phone" aria-hidden="true"></i></button></NavLink></div>
                <div><NavLink to="/references"><button className="btn btn-secondary btn-lg profilebutton"><i className="fa fa-address-book-o" aria-hidden="true"></i></button></NavLink></div>
                </div>
                {this.props.children}
            </div>

        );
    }
}

export default BaseLayout;