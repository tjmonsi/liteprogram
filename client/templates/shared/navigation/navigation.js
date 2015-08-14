Template.Navigation.helpers({
  isAdmin: function() {
    if (Meteor.user()) {
      return Meteor.user().profile.roles==="admin"
    }
  },
  navigation: function() {
    return [
      // {
      //   path: "/about",
      //   text: "About Us"
      // },
      // {
      //   path: "/articles",
      //   text: "News"
      // },
      // {
      //   path: "/events",
      //   text: "Upcoming Events"
      // },
      // {
      //   path: "/albums",
      //   text: "Past Projects"
      // },
      {
        path: "/contact",
        text: "Contact Us"
      }
      
    ]
  }
})

Template.Navigation.onRendered(function(){
  $(".navigation-button").sideNav();
})