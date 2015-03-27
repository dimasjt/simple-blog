Meteor.publish('listPosts', function(){
  return Posts.find();
});

Posts.allow({
  'insert': function(){
    return true;
  }
})