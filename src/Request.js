const key = 'ec5cf30a6f0b344bafc81f48409b9f37'

const requests ={
    requestAllMovies : `https://api.themoviedb.org/3/movie?api_key=${key}&language=en-US`,
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestHorror : `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    requestRomance : `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
    requestDocumentry : `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
    requestAction : `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
}

export default requests;