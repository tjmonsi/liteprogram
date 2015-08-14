Template.AdminArticles.helpers({
  title: function() {
    return Template.instance().title.get()
  },
  text: function() {
    return Template.instance().text.get()
  }
  
})

Template.AdminArticles.events({
  "keyup #title": function(e) {
    Template.instance().title.set($("#title").val())
  },
  "keyup #text": function(e) {
    Template.instance().text.set($("#text").val())
  },
  "click #save": function(e) {
    e.preventDefault()
    save()
  },
  "click #publish": function(e) {
    e.preventDefault()
    save(true)
  },
  "click #unpublish": function(e) {
    e.preventDefault()
    save(false)
  },
  "click #delete": function(e) {
    e.preventDefault()
    Meteor.call("deleteArticle", FlowRouter.getParam("id"), function(err, res){
      if (err) {
        Materialize.toast(err.message+": "+err.reason, 3000)
      }
      else {
        Materialize.toast("Article Deleted", 1500)
        FlowRouter.go("/admin/articles")
      }
    })
  }
})

Template.AdminArticles.onCreated(function(){
  var instance = this;
  instance.ready = new ReactiveVar()
  instance.autorun(function() {
    var handle = SubsMan.subscribe('articles', FlowRouter.getParam("id"))
    instance.ready.set(handle.ready())
  })
  instance.title = new ReactiveVar()
  instance.text = new ReactiveVar()
})

Template.AdminArticles.onRendered(function(){
  var instance = this;
  var article = Articles.findOne({_id: FlowRouter.getParam("id")})
  $("#title").val(article.title)
  $("#text").val(article.text)
  instance.title.set(article.title)
  instance.text.set(article.text)
})

function save(publish) {
  var title = $("#title").val()
  var text = $("#text").val()
  
  Meteor.call("updateArticle", FlowRouter.getParam("id"), title, text, publish, function(err, res){
    if (err) {
      Materialize.toast(err.message+": "+err.reason, 3000)
    }
    else {
      Materialize.toast("Article Saved", 1500)
    }
  })
}