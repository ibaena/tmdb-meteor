import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

//Now playing URL
var inTheatreURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=3729ffa22dfa780e9abb43dee3074695";
var SingleMovieURL = "https://api.themoviedb.org/3?api_key=3729ffa22dfa780e9abb43dee3074695";

Meteor.methods({
    getNewMovies: function() {
        this.unblock();
        return HTTP.get(inTheatreURL, {
        });
    },
    getSingleMovie: function(){
        this.unblock();
        return HTTP.get(SingleMovieURL, {

        });
    }
});
