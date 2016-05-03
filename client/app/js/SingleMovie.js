import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SingleMovie.onCreated(function() {
  var SingleMovieId = FlowRouter.getParam('id');
  Meteor.call("SingleMovie", {param:SingleMovieId}, function(err, res) {
    Session.set('SingleMovie', res);
    console.log(SingleMovieId);
  });
});

Template.SingleMovie.helpers({
  Movies: function() {
    return Session.get('newMovies').map(function(Movies, index) {
      if (index === 0)
        Movies.isFirst = true;

      return Movies;
    });

  }
});

Template.SingleMovie.events({

});
