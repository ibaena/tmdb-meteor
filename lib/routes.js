FlowRouter.route('/', {
  name: 'home',
  action(){
    BlazeLayout.render('MainLayout', {main:'Home'});
  }
});
FlowRouter.route('/movies', {
  name: 'movies',
  action(){
    BlazeLayout.render('MainLayout', {main:'Movies'});
  }
});
FlowRouter.route('/tv', {
  name: 'television',
  action(){

    BlazeLayout.render('MainLayout', {main:'Televison'});
  }
});
FlowRouter.route('/movie/:title/:id', {
  name: 'single-movie',
  action(){
    BlazeLayout.render('MainLayout', {main:'SingleMovie'});
  }
});
FlowRouter.route('/tv/:name/:id', {
  name: 'single-tv',
  action(){
    BlazeLayout.render('MainLayout', {main:'SingleTv'});
  }
});
FlowRouter.route('/list/:name/:id', {
  name: 'list-movie',
  action(){
    BlazeLayout.render('MainLayout', {main:'List'});
  }
});
