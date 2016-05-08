import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SortMovieGenre.onCreated(function() {
    var movie = FlowRouter.getParam('id');
    var page = FlowRouter.getParam('page');

  Meteor.call("getMovieGenres", {params:{
    movie: movie,
    page: page
  }}, function(err, res) {
    Session.set('SortMovieGenre', res.data.results);
    Session.set('SortMoviePaginate', res.data);
    console.log(res.data);
  });
});

Template.SortMovieGenre.helpers({
  SortMovieGenre: function() {
    return Session.get('SortMovieGenre').slice(0,18).map(function(SortMovieGenre, index) {
      if (index > 0)
        SortMovieGenre.isFirst = true;
          return SortMovieGenre;
    });
  },
  SortMoviePaginate: function() {
    return Session.get('SortMoviePaginate');
  },

});

Template.SortMovieGenre.events({
  "mouseover .list-temp": function(event, template) {
    $('[data-toggle="popover"]').popover({
      trigger: "hover"
    });
  },
  "click .coverArt": function(event, template) {
    $('[data-toggle="popover"]').popover("hide");
  }
});
