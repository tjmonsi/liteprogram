Images = new Mongo.Collection("lite-images");

Images.attachSchema(new SimpleSchema({
  username: {
    type: String,
    autoValue: function(){
      if (this.isInsert) {
        if (Meteor.user()) return Meteor.user().username
        else if (Meteor.users.findOne({username: this.value})) return this.value
        else return null
      } 
      else this.unset()
    }
  },
  caption: {
    type: String,
    optional: true
  },
  url: {
    type: String,
    optional: true
  },
  albumId: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) return new Date();
      else this.unset();
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) return new Date();
    },
    denyInsert: true,
    optional: true
  }
}))

if (Meteor.isServer) {
  Meteor.startup(function(){
    Images._ensureIndex({albumId: 1})
  })
}