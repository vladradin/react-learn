import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="col-3">
                <ul className="nav flex-column nav-pills align-items-center bg-light">
                    <li className="nav-item">
                        <Link to="/movies" className="nav-link" >Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/actors" className="nav-link" >Actors</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/favorites" className="nav-link" >Favorites</Link>
                    </li>
                </ul>
            </div>);
    }
}

export default SideMenu;