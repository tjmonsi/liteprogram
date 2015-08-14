FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "NotFound"})
  }
}

FlowRouter.route("/", {
  name: "home",
  action: function(){
    BlazeLayout.render("MainLayout", {main: "Home2"})
  }
})

FlowRouter.route("/contact", {
  name: "contact",
  action: function() {
    BlazeLayout.render("MainLayout", {main: "Contact"})
  }
})



var adminRoutes = FlowRouter.group({
  prefix: "/admin",
  triggersEnter: [function(context, redirect){
    if (Meteor.user()) {
      if (Meteor.user().profile.roles!=="admin") {
        redirect("/")
      }
    }
  }]
})

adminRoutes.route("/", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "Admin"})
  }
})

adminRoutes.route("/articles", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "AdminArticlesList"})
  }
})

adminRoutes.route("/articles/:id", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "AdminArticles"})
  }
})

adminRoutes.route("/albums", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "AdminAlbumsList"})
  }
})

adminRoutes.route("/albums/:id", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "AdminAlbums"})
  }
})

adminRoutes.route("/events", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "AdminEventsList"})
  }
})

adminRoutes.route("/events/:id", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "AdminEvents"})
  }
})

FlowRouter.route("/articles", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "ArticlesList"})
  }
})

FlowRouter.route("/articles/:id", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "Articles"})
  }
})

FlowRouter.route("/albums", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "AlbumsList"})
  }
})

FlowRouter.route("/albums/:id", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "Albums"})
  }
})

FlowRouter.route("/events", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "EventsList"})
  }
})

FlowRouter.route("/events/:id", {
  action: function() {
    BlazeLayout.render("MainLayout", {main: "Events"})
  }
})