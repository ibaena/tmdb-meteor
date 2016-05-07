import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SimilarTv.onCreated(function() {
  var SingleTvId = FlowRouter.getParam('id');

  Meteor.call("getSimilarTv", {
    query: SingleTvId
  }, function(err, res) {
    Session.set('SimilarTv', res.data.results);
  });
});

Template.SimilarTv.helpers({
  SimilarTv: function() {
    return Session.get('SimilarTv').slice(0, 12);

  }
});

Template.SimilarTv.events({
  "mouseover .list-temp": function(event, template) {
    $('[data-toggle="popover"]').popover({
      trigger: "hover"
    });
  },
  "click .coverArt": function(event, template) {
    $('[data-toggle="popover"]').popover("hide");
  }
});
