import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SingleTvCard.onRendered(function() {
  var SingleTvId = FlowRouter.getParam('id');

  Meteor.call("getSingleTv", {
    query: SingleTvId
  }, function(err, res) {
    Session.set('SingleTv', res.data);
  });
  Meteor.call("getTvTrailer", {
    query: SingleTvId
  }, function(err, res) {
    Session.set('TvTrailer', res.data.results);
    console.log(res.data.results);
  });
});

Template.SingleTvCard.helpers({
  SingleTv: function() {
    return Session.get('SingleTv');
  }
});

Template.SingleTvCard.events({});

Template.TvCarousel.helpers({
  TvTrailer: function() {
    return Session.get('TvTrailer').map(function(TvTrailer, index) {
      if (index === 0)
        TvTrailer.isFirst = true;

      return TvTrailer;
    });
  }
});
