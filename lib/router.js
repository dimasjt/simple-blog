Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

Router.map(function(){
  this.route('home', function(){
    path: '/',
    this.render('home');
  });

  this.route('/posts', {
    path: '/posts',
    onBeforeAction: function(){
      Meteor.subscribe('listPosts');
      this.next();
    },
    action: function(){
      this.render();
    }
  });
})