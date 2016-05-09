import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SortMovieGenre.onCreated(function() {
  var movie = FlowRouter.getParam('id');
  var page = FlowRouter.getParam('page');

  Meteor.call("getMovieGenres", {
    params: {
      movie: movie,
      page: page
    }
  }, function(err, res) {
    Session.set('SortMovieGenre', res.data.results);
    Session.set('SortMoviePaginate', res.data.total_pages);
    console.log(res.data);
  });
});

Template.SortMovieGenre.helpers({
  SortMovieGenre: function() {
    return Session.get('SortMovieGenre').slice(0, 18);
  },
  SortMoviePaginate: function() {
    return Session.get('SortMoviePaginate');
  },
  pageArray: function() {
    var page = Session.get('SortMoviePaginate'); //#
    var pageArray = [];
    for (var i = 0; i < page; i++) {
      pageArray.push(i);
    }
    return pageArray.slice(0,30).map(function(pageArray, index){
    if(index === 0)
    pageArray.isFirst = true;
        return pageArray;
    });
  }
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
