import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.LatestMovies.onRendered(function() {
  Meteor.call("popularMovies", function(err, res) {
    Session.set('popularMovies', res.data);
    Session.set('popularMovies', res.data.results);
    console.log(res.data.results);
  });
});


Template.LatestMovies.helpers({
  popularMovies: function() {
    return Session.get('popularMovies').slice(0,12);
  },

});

Template.LatestMovies.events({
  "mouseover .list-temp": function(event, template){
    $('[data-toggle="popover"]').popover({ trigger: "hover"});

  }
});
