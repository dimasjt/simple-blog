Template.posts.events({
  'click #new_post': function(event, template){
    event.preventDefault();
    console.log(event);
    console.log(template);
  }
})