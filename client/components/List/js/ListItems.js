import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.List.onCreated(function() {
    var ListId = FlowRouter.getParam('id');

  Meteor.call("getAllList", {query: ListId}, function(err, res) {
    Session.set('ListItems', res.data);
    console.log(res.data);
  });

});

Template.ListItems.helpers({
  ListItems: function() {
    return Session.get('ListItems');
  }
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
