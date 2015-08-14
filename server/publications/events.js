Meteor.publish("events-all", function(){
  return Events.find()
})

Meteor.publish("events", function(id) {
  return Events.find({_id: id})
})