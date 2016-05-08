import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SortMovieGenre.onCreated(function() {
    var movie = FlowRouter.getParam('id');

  Meteor.call("getMovieGenres", {query: movie}, function(err, res) {
    Session.set('SortMovieGenre', res.data.results);
    console.log(res.data.results);
  });

});

Template.SortMovieGenre.helpers({
  SortMovieGenre: function() {
    return Session.get('SortMovieGenre').slice(0,18);
  },
});

Template.SortMovieGenre.events({
  "mouseover .list-temp": function(event, template) {
    $('[data-toggle="popover"]').popover({
      trigger: "hover"
    });
  },
  "click .coverArt": function(event, template) {
    $('[data-toggle="popover"]').popover("hide");
  }
});
