import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.PopularTv.onCreated(function() {
  Meteor.call("popularTv", function(err, res) {
    Session.set('popularTv', res.data.results);
  });
});

Template.PopularTv.helpers({
  popularTv: function() {
    return Session.get('popularTv').slice(0,12);
  },

});

Template.PopularTv.events({
  "mouseover .list-temp": function(event, template){
    $('[data-toggle="popover"]').popover({ trigger: "hover"});
  },
  "click .coverArt": function(event, template){
    $('[data-toggle="popover"]').popover("hide");
  }
});
