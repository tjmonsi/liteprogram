Meteor.startup(function(){
  Meteor.setTimeout(addAccounts, 500)
})

function addAccounts() {
  var users = null;
  
  if (Meteor.settings) {
    if (Meteor.settings.private["fixture-users"]) {
      var users = Meteor.settings.private["fixture-users"]
    }
  }
  
  
  if (users) {
    for (var j in users) {
      var id = null
      var user = users[j]
      if (Meteor.users.find({username: users[j].username}).count()== 0) {
        console.log(users[j])
        
        id = Accounts.createUser({
          username: user.username,
          email: user.email,
          password: user.password,
          profile: user.profile
        })
      }
      else {
        id = Meteor.users.findOne({username: users[j].username})._id
      }
      
    }
      
    
  }
  
}