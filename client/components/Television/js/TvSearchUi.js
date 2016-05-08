import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.TvSearchUI.onCreated(function(){
  Meteor.call("getTvGenre", function(err, res) {
    Session.set('ListTvGenres', res.data.genres);
  });
});

Template.TvSearchUI.helpers({
ListTvGenres : function(){
  return Session.get('ListTvGenres').map(function(ListGenres, index) {
    if (index === 0)
      ListGenres.isFirst = true;
    return ListGenres;
  });
}
});
