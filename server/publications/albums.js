Meteor.publish("albums-all", function(){
  return Albums.find()
})

Meteor.publish("albums", function(id) {
  return Albums.find({_id: id})
})