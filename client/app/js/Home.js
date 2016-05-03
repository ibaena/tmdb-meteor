import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';



Template.Header.onCreated(function() {
  Meteor.call("getNewMovies", function(err, res) {
    Session.set('newMovies', res.data);
    console.log(res);
  });
});




Template.Header.helpers({
  Movies: function() {
    return Session.get('newMovies');

  }
});

Template.Header.events({
  'click .help': () => {
    console.log('please');
  }

});
