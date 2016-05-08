var tmdbKey = '?api_key=3729ffa22dfa780e9abb43dee3074695';
var inTheatreURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=3729ffa22dfa780e9abb43dee3074695";
var SingleMovieURL = "https://api.themoviedb.org/3/movie/";
var getMovieTrailer = "https://api.themoviedb.org/3/movie/";
var popularMoviesURL = "https://api.themoviedb.org/3/movie/popular?api_key=3729ffa22dfa780e9abb43dee3074695";
var popularTvURL = "https://api.themoviedb.org/3/tv/popular?api_key=3729ffa22dfa780e9abb43dee3074695";
var SingleTvURL = "https://api.themoviedb.org/3/tv/";
var getListURL = "https://api.themoviedb.org/3/list/";
var getUpcomingURL = "https://api.themoviedb.org/3/movie/upcoming";
var getGenreURL = "http://api.themoviedb.org/3/genre/";

Meteor.methods({
  getNewMovies: function() {
    this.unblock();
    return HTTP.get(inTheatreURL, {});
  },
  getSingleMovie: function(query) {
    var movie = query.query;
    this.unblock();
    return HTTP.get(SingleMovieURL + movie + tmdbKey, {

    });
  },
  getMovieTrailer: function(query) {
    var movie = query.query;
    this.unblock();
    return HTTP.get(getMovieTrailer + movie + '/videos' + tmdbKey, {

    });
  },
  popularMovies: function() {
    this.unblock();
    return HTTP.get(popularMoviesURL, {

    });
  },
  popularTv: function() {
    this.unblock();
    return HTTP.get(popularTvURL, {

    });
  },
  getSingleTv: function(query) {
    var tv = query.query;
    this.unblock();
    return HTTP.get(SingleTvURL+tv+tmdbKey, {

    });
  },
  getTvTrailer: function(query) {
    var tv = query.query;
    this.unblock();
    return HTTP.get(SingleTvURL + tv + '/videos' + tmdbKey, {

    });
  },
  getSimilarMovies: function(query) {
    var movie = query.query;
    this.unblock();
    return HTTP.get(SingleMovieURL + movie + '/similar' + tmdbKey, {

    });
  },
  getListMovie: function(query) {
    var movie = query.query;
    this.unblock();
    return HTTP.get(SingleMovieURL + movie + '/lists' + tmdbKey, {

    });
  },
  getAllList: function(query) {
    var ListId = query.query;
    this.unblock();
    return HTTP.get(getListURL + ListId + tmdbKey, {

    });
  },
  getMovieGenre: function() {
    this.unblock();
    return HTTP.get(getGenreURL + 'movie/list'+ tmdbKey, {

    });
  },
  getUpcomingMovies: function() {
    this.unblock();
    return HTTP.get(getUpcomingURL + tmdbKey, {

    });
  },
  getSimilarTv: function(query) {
    var tv = query.query;
    this.unblock();
    return HTTP.get(SingleTvURL + tv + '/similar' + tmdbKey, {

    });
  },
  getMovieGenres: function(query) {
    var movie = query.query;
    console.log(movie);
    this.unblock();
    return HTTP.get(getGenreURL + movie + '/movies' + tmdbKey, {

    });
  },
});
