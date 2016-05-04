import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SingleMovieCard.onCreated(function() {
  var SingleMovieId = FlowRouter.getParam('id');

  Meteor.call("getSingleMovie", {query: SingleMovieId}, function(err, res) {
    Session.set('SingleMovie', res.data);
    console.log(res.data);
  });
  Meteor.call("getMovieTrailer", {query: SingleMovieId}, function(err, res) {
    Session.set('MovieTrailer', res.data.results);
    console.log(res.data.results);
  });
});

Template.SingleMovieCard.helpers({
  SingleMovie: function() {
    return Session.get('SingleMovie');

  }
});

Template.TrailerCarousel.helpers({
  MovieTrailer: function() {
    return Session.get('MovieTrailer').map(function(MovieTrailer, index) {
      if (index === 0)
        MovieTrailer.isFirst = true;

      return MovieTrailer;
    });
  }
});

Template.SingleMovieCard.events({

});
