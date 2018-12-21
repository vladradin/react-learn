import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <ul className="nav justify-content-center bg-dark">
                    <li className="nav-item">
                        <Link to="/movies" className="nav-link active text-center" >Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/actors" className="nav-link active" >Actors</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/favorites" className="nav-link active" >Favorites</Link>
                    </li>                    
                </ul>
            </div>);
    }
}

export default Navbar;