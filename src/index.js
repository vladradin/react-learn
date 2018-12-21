import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Store, createStore, combineReducers, StoreCreator, Reducer, applyMiddleware } from 'redux';
import movieReducer from './Reducers/movieReducer';
import actorReducer from './Reducers/actorReducer';
import favoriteReducer from './Reducers/favoriteReducer';

import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    movies: movieReducer,
    actors: actorReducer,
    favorites: favoriteReducer
})
const store = createStore(rootReducers, {
    movies: [],
    actors: [],
    favorites: []
}, applyMiddleware(thunk));

debugger;

console.log(store);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
