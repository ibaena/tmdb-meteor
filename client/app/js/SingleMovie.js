import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SingleMovie.onCreated(function() {
  var SingleMovieId = FlowRouter.getParam('id');

  Meteor.call("getSingleMovie", {query: SingleMovieId}, function(err, res) {
    Session.set('SingleMovie', res);
    console.log(res);
  });
});

Template.SingleMovie.helpers({
  Movies: function() {
    return Session.get('SingleMovie');

  }
});

Template.SingleMovie.events({

});
