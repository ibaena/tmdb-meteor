import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.Header.onCreated(function() {
  Meteor.call("getNewMovies", function(err, res) {
    Session.set('newMovies', res.data.results);
  });

});

Template.Header.helpers({
  Movies: function() {
    return Session.get('newMovies').slice(0,10).map(function(Movies, index) {
      if (index === 0)
        Movies.isFirst = true;

      return Movies;
    });
  }
});

Template.Header.events({
  'click .headerSlider-link': () => {

  }
});
