Accounts.onCreateUser(function(options, user){
	if (!options.profile) {
	  user.profile = {
	    displayName: user.username
	  }
	}
	else {
	  user.profile = options.profile
	  if (!user.profile.displayName) user.profile.displayName = user.username
	  if (!user.profile.roles) user.profile.roles = ""
	}
	console.log(user)
	return user
})



