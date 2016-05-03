import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


var url = "https://api.themoviedb.org/3/movie/550?api_key=3729ffa22dfa780e9abb43dee3074695";

Meteor.methods({
    getNewMovies: function() {
        this.unblock();
        return HTTP.get(url, {
        });
    }
});
