Articles = new Mongo.Collection("lite-articles");

Articles.attachSchema(new SimpleSchema({
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
  lastUsername: {
    type: String,
    optional: true
  },
  title: {
    type: String,
    optional: true
  },
  text: {
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
  },
  publish: {
    type: Boolean,
    optional: true
  }
}))