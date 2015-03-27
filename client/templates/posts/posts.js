Template.posts.helpers({
  listPosts: function(){
    return Posts.find();
  }
});

Template.posts.events({
  'submit #new_post': function(){
    event.preventDefault();
    var $title = $(event.target).find('#post_title').val();
    var $description = $(event.target).find('#post_description').val();

    Posts.insert({
      title: $title,
      description: $description,
      createdAt: new Date()
    });

    $title.val('');
    $description.val('');
  }
});
