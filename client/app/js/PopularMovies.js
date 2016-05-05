import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.PopularMovies.onRendered(function() {
  Meteor.call("popularMovies", function(err, res) {
    Session.set('popularMovies', res.data);
    Session.set('popularMovies', res.data.results);
    console.log(res.data.results);
  });
});

Template.PopularMovies.helpers({
  popularMovies: function() {
    return Session.get('popularMovies').slice(0,12);
  },

});

Template.PopularMovies.events({
  "mouseover .list-temp": function(event, template){
    $('[data-toggle="popover"]').popover({ trigger: "hover"});
  },
  "click .coverArt": function(event, template){
    $('[data-toggle="popover"]').popover("hide");
  }
});
