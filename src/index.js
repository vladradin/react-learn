import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { actors, favorites } from "./Reducers"
import movieApi from "./api/movie-provider"

import { MovieReducer as movies } from './State/Actions/Movies/reducer';

import thunk from 'redux-thunk';
import * as types from './State/Actions/actionTypes'


import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const rootReducers = combineReducers({
    movies,
    actors,
    favorites
});

const getMovies = () => {
    return dispatch => {
        movieApi.getMovies()
            .then(movies => {
                dispatch({ type: types.loadMoviesSuccesfull, movies })
            })
    }
}

const store = createStore(rootReducers, {
    movies: [
        { id: 1, name: "Singur Acasa" },
        { id: 3, name: "Terminator" }
    ],
    actors: [
        { id: 1, name: "Stallone" },
        { id: 5, name: "Michael Jackson" }
    ],
    favorites: {
        movies: [1],
        actors: [5]
    }
}, applyMiddleware(thunk, reduxImmutableStateInvariant()));

console.log(store);
console.log("salut");



ReactDOM.render(<App store={store} />, document.getElementById('root'));

serviceWorker.unregister();