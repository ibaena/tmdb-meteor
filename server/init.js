import {
  Meteor
} from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup


  //Now playing URL
  var tmdbKey = '?api_key=3729ffa22dfa780e9abb43dee3074695';
  var limit = '&limit=6';
  var inTheatreURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=3729ffa22dfa780e9abb43dee3074695";
  var SingleMovieURL = "https://api.themoviedb.org/3/movie/";
  var getMovieTrailer = "https://api.themoviedb.org/3/movie/";
  var popularMoviesURL = "https://api.themoviedb.org/3/movie/popular?api_key=3729ffa22dfa780e9abb43dee3074695";
  var popularTvURL = "https://api.themoviedb.org/3/tv/popular?api_key=3729ffa22dfa780e9abb43dee3074695";
  var SingleTvURL = "https://api.themoviedb.org/3/tv/";

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

  });
});
