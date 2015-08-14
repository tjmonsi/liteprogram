Meteor.publish("images-all", function(albumId){
  return Images.find({albumId: albumId})
})

// Meteor.publish("images-all", function(){
//   return Images.find()
// })

Meteor.publish("images", function(id) {
  return Images.find({_id: id})
})