import * as type from '../actionTypes';

function addMovie(crtMovies, newMovie) {
    var newMovies = [...crtMovies];
    newMovies.push(newMovie);
    return newMovies;
}

function removeMovie(crtMovies, movieId) {
    return crtMovies.filter(movie => movie.id !== movieId);
}

export function MovieReducer(state = [], action) {
    switch (action.type) {
        case type.loadMoviesSuccesfull: {
            return [...action.movies]
        }
        case type.createMovie:
            return addMovie(state, action.movie);
        case type.deleteMovie:
            return removeMovie(state, action.movieId)
        default:
            return state;
    }
}