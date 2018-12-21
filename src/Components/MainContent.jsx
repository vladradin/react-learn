import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import MoviesPage from './Content/MoviesPage';
import FavoritesPage from './Content/FavoritesPage';
import ActorsPage from './Content/ActorsPage';
import Home from './Content/Home';
import NotFoundPage from './Content/NotFoundPage';

import { Route, Switch } from 'react-router-dom';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: "ce mai faci" };
    }
    render() {
        return (
            <div className="col-9">
                <Switch>
                    <Route path="/" exact render={(props) => {
                        return (
                            <Home greeting={this.state.greeting} />
                        );
                    }} />
                    <Route path="/favorites" component={FavoritesPage} />
                    <Route path="/movies" component={MoviesPage} />
                    <Route path="/actors" component={ActorsPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>);
    }
}

export default MainContent;