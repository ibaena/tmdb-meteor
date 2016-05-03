import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

//Now playing URL
var tmdbKey = '?api_key=3729ffa22dfa780e9abb43dee3074695';
var inTheatreURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=3729ffa22dfa780e9abb43dee3074695";
var SingleMovieURL = "https://api.themoviedb.org/3/movie/";

Meteor.methods({
    getNewMovies: function() {
        this.unblock();
        return HTTP.get(inTheatreURL, {
        });
    },
    getSingleMovie: function(query){
        var movie = query.query;
        console.log(SingleMovieURL+movie+tmdbKey);
        this.unblock();
        return HTTP.get(SingleMovieURL+movie+tmdbKey, {

        });
    }
});