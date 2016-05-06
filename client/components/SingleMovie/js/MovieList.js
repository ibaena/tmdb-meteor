import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.MovieList.onCreated(function() {
  var SingleMovieId = FlowRouter.getParam('id');

  Meteor.call("getListMovie", {query: SingleMovieId}, function(err, res) {
    Session.set('MovieList', res.data.results);
    console.log(res.data.results);
  });
});

Template.MovieList.helpers({
  MovieList: function() {
    return Session.get('MovieList').slice(0,10);

  }
});

Template.MovieList.events({
'click #dropdownMenu1': function(event, template){
  $('[data-toggle="collapse"]').collapse();
},
'mouseover .listLinks': function(event, template){
  $('[data-toggle="popover"]').popover({ trigger: "hover"});
},
'click .listLinks': function(event, template){
  $('[data-toggle="popover"]').popover("hide");
},


});
