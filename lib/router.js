Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

Router.map(function(){
  this.route('/', function(){
    this.render('home');
  });

  this.route('/posts', function(){
    this.render('posts');
  });
})