import { loadMoviesSuccesfull } from '../State/Actions/actionTypes';

var movieNames = [
    "Fantastic Beast and Where you can find them",
    "Harry Potter",
    "Ritchie Rich",
    "Supernatural",
    "Vampire Diaries"
];

var movieIndex = 10;

const mockMovies = [
    { id: 1, name: "1st movie" },
    { id: 2, name: "2nd movie" },
    { id: 3, name: "3rd movie" },
    { id: 4, name: "4th movie" }
];

const item = {
    giveMeMovie: () => {
        var crtIndex = movieIndex++ % movieNames.length;
        var movie = { id: movieIndex, name: movieNames[crtIndex] }
        return movie;
    },
    getMovies: () => {
        return new Promise((resolver, rejecter) => {
            setTimeout(() => {
                resolver([...mockMovies])
            }, 4000)
        });
    }
}

export default item;
