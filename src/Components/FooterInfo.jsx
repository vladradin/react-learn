import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class FooterInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <ul className="nav justify-content-center nav-fill">
                    <li className="nav-item">
                        <Link to="/" className="nav-link " >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/movies" className="nav-link" >Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/actors" className="nav-link " >Actors</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/favorites" className="nav-link " >favorites</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link " >Contact</Link>
                    </li>
                </ul>
            </div>);
    }
}

export default FooterInfo;