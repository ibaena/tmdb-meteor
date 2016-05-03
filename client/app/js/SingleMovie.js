import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SingleMovieHeader.onCreated(function() {
  var SingleMovieId = FlowRouter.getParam('id');

  Meteor.call("getSingleMovie", {query: SingleMovieId}, function(err, res) {
    Session.set('SingleMovie', res.data);
    console.log(res.data);
  });
});

Template.SingleMovieHeader.helpers({
  SingleMovie: function() {
    return Session.get('SingleMovie');

  }
});

Template.SingleMovieHeader.events({

});
