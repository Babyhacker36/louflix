
const url = 'https://api.themoviedb.org/3/search/movie?api_key=5cd640db7a351fb891b792aab5d5ad11'

// Initial Values
const MOVIE_DB_API = '5cd640db7a351fb891b792aab5d5ad11';
const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POST_IMAGE = 'https://via.placeholder.com/150';

function requestMovies(url, onComplete, onError) {
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function generateMovieDBUrl(path) {
    const url = `${MOVIE_DB_ENDPOINT}/3${path}?api_key=${MOVIE_DB_API}`;
    return url;
}


function getTopRatedMovies() {
    const url = generateMovieDBUrl(`/movie/top_rated`);
    const anchor = `<div id="TRM"></div>`;
    const render = renderMovies.bind({ title: anchor + 'Top Rated Movies' })
    requestMovies(url, render, handleGeneralError);

  
    
}

function getTrendingMovies() {
    const url = generateMovieDBUrl('/trending/movie/day');
    const anchor = `<div id="TM"></div>`;
    const render = renderMovies.bind({ title: anchor + 'Trending Movies' })
    requestMovies(url, render, handleGeneralError);
}


function searchUpcomingMovies() {
    const url = generateMovieDBUrl('/movie/upcoming');
    const anchor = `<div id="UP"></div>`; 
    const render = renderMovies.bind({ title: anchor + 'Upcoming Movies' })
    requestMovies(url, render, handleGeneralError);
}

function searchPopularMovie() {
    const url = generateMovieDBUrl('/movie/popular');
    const anchor = `<div id="PM"></div>`;
    const render = renderMovies.bind({ title: anchor + 'Popular Movies' });
    requestMovies(url, render, handleGeneralError);
   
}

function searchNowPlaying() {
    const url = generateMovieDBUrl('/movie/now_playing');
    const anchor = `<a href="" id="NP"></a>`;
    const render = renderMovies.bind({ title: anchor + 'Now Playing'});
    requestMovies(url, render, handleGeneralError);
    
}

// Invoke a different function for search movies
function searchMovie(value) {
    const url = generateMovieDBUrl('/search/movie') + '&query=' + value;
    requestMovies(url, renderSearchMovies, handleGeneralError);
}


function getVideosByMovieId(movieId, content) {
    const url = generateMovieDBUrl(`/movie/${movieId}/videos`);
    const render = createVideoTemplate.bind({ content });
    requestMovies(url, render, handleGeneralError);
}







