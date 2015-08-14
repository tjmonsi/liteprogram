Template.AdminArticlesList.helpers({
  article: function() {
    return Articles.find({},{sort: {createdAt: -1}})
  }
})

Template.AdminArticlesList.events({
  "click #add-article": function(e) {
    Meteor.call("insertArticle", function(err, res){
      if (err) {
        Materialize.toast(err.message+": "+err.reason, 3000)
      }
      else {
        Materialize.toast("Article Created", 1500)
        FlowRouter.go("/admin/articles/"+res)
      }
    })
  }
})

Template.AdminArticlesList.onCreated(function(){
  var instance = this;
  instance.ready = new ReactiveVar()
  instance.autorun(function() {
    var handle = SubsMan.subscribe('articles-all')
    instance.ready.set(handle.ready())
  })
})