Meteor.methods({
  insertArticle: function() {
    if (Meteor.user()) {
      return Articles.insert({
        username: Meteor.user().username,
        title: "No Title Yet"
      })
    }
    else throw new Meteor.Error("Not Logged In")
  },
  deleteArticle: function(id) {
    if (Meteor.user()) {
      Articles.remove({_id: id})
    }
    else throw new Meteor.Error("Not Logged In")
  },
  updateArticle: function(id, title, text, publish) {
    if (Meteor.user()) {
      check(title, String)
      check(text, String)
      
      var option = {
        title: title,
        text: text,
        lastUsername: Meteor.user().username
      }
      
      if (publish) {
        option.publish = publish
      }
      else if (publish==false) {
        option.publish = publish
      }
      
      Articles.update({_id: id}, {$set: options})
    }
    else throw new Meteor.Error("Not Logged In")
  }
})