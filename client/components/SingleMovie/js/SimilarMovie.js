import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SimilarMovies.onCreated(function() {
  var SingleMovieId = FlowRouter.getParam('id');

  Meteor.call("getSimilarMovies", {
    query: SingleMovieId
  }, function(err, res) {
    Session.set('SimilarMovies', res.data.results);
  });
});

Template.SimilarMovies.helpers({
  SimilarMovies: function() {
    return Session.get('SimilarMovies').slice(0, 12);

  }
});

Template.SimilarMovies.events({
  "mouseover .list-temp": function(event, template) {
    $('[data-toggle="popover"]').popover({
      trigger: "hover"
    });
  },
  "click .coverArt": function(event, template) {
    $('[data-toggle="popover"]').popover("hide");
  }
});
