import * as types from '../actionTypes';

export function CreateMovie(movie) {
    return {
        type: types.createMovie,
        movie
    };
}

export function RemoveMovie(movieId) {
    return {
        type: types.deleteMovie,
        movieId
    };
}

export function UpdateMovie(movieId, movie) {
    return {
        type: types.updateMovie,
        movieId,
        movie
    };
}