import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.Upcoming.onCreated(function() {
  Meteor.call("getUpcomingMovies", function(err, res) {
    Session.set('upcomingMovies', res.data.results);
  });
});

Template.Upcoming.helpers({
  upcomingMovies: function(){
    return Session.get('upcomingMovies').map(function(upcomingMovies, index) {
      if (index === 0)
        upcomingMovies.isFirst = true;

      return upcomingMovies;
    });
  }
});

Template.Upcoming.events({
  "mouseover .list-temp": function(event, template){
    $('[data-toggle="popover"]').popover({ trigger: "hover"});
  },
  "click .coverArt": function(event, template){
    $('[data-toggle="popover"]').popover("hide");
  }
});
