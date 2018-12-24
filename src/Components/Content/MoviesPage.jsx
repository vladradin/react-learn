import React, { Component } from 'react';
import { CreateMovie, RemoveMovie } from '../../State/Actions/Movies/actions';

import { connect } from 'react-redux';

import movieApi from '../../api/movie-provider';
import StarRating from '../common/rating/rating-presentation';
import CardInput from '../common/card-input';

import * as types from '../../State/Actions/actionTypes';

function LoadMovies() {
    return (dispatch) => movieApi.getMovies()
        .then(movies => {
            dispatch({ type: types.loadMoviesSuccesfull, movies })
        })
}

class MoviesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { index: 10, rating: 3 };
        this.deleteMovieCall = this.deleteMovieCall.bind(this);
        this.addMovieOperation = this.addMovieOperation.bind(this);
        this.ratingChanged = this.ratingChanged.bind(this);
    }

    deleteMovieCall = (movieId) => {
        var self = this;
        return () => {
            self.props.deleteMovie(movieId);
        };
    }

    addMovieOperation() {
        var movie = movieApi.giveMeMovie();
        this.props.createMovie(movie);
    }

    ratingChanged(rating) {
        this.setState({ rating: rating });
    }

    render() {
        var self = this;
        return (
            <div>
                <div>Movies Page</div>
                <ul>
                    {this.props.movies.map(movie => {
                        return (
                            <li key={movie.id}>
                                {movie.name}
                                <button onClick={this.deleteMovieCall(movie.id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={self.addMovieOperation}>Add</button>
                <button onClick={() => self.props.loadMovies()}>Load</button>
                <br />
                <StarRating stars={10} rating={this.state.rating} onChange={this.ratingChanged} />
                <p>rating: {this.state.rating}</p>
                <p><CardInput /></p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createMovie: (movie) => dispatch(CreateMovie(movie)),
        deleteMovie: (movieId) => dispatch(RemoveMovie(movieId)),
        loadMovies: (s) => dispatch(LoadMovies())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);