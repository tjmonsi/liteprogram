Meteor.publish("articles-all", function(){
  return Articles.find()
})

Meteor.publish("articles", function(id) {
  return Articles.find({_id: id})
})