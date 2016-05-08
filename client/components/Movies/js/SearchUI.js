import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.SearchUI.onCreated(function(){
  Meteor.call("getMovieGenre", function(err, res) {
    Session.set('ListGenres', res.data.genres);
  });
});

Template.SearchUI.helpers({
ListGenres : function(){
  return Session.get('ListGenres').map(function(ListGenres, index) {
    if (index === 0)
      ListGenres.isFirst = true;

    return ListGenres;
  });
}
});
