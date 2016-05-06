import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.ListItems.onCreated(function() {
    var ListId = FlowRouter.getParam('id');

  Meteor.call("getAllList", {query: ListId}, function(err, res) {
    Session.set('ListItem', res.data);
    Session.set('ListItems', res.data.items);
  });

});

Template.ListItems.helpers({
  ListItem: function() {
    return Session.get('ListItem');
  },
  ListItems: function() {
    return Session.get('ListItems').slice(0,24);
  },
});


Template.ListItems.events({
  "mouseover .list-temp": function(event, template) {
    $('[data-toggle="popover"]').popover({
      trigger: "hover"
    });
  },
  "click .coverArt": function(event, template) {
    $('[data-toggle="popover"]').popover("hide");
  }
});
