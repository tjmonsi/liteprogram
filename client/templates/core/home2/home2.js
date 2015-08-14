Template.Home2.onRendered(function(){
  $('.parallax').parallax();
  console.log($('.services-content').height());
  $('.services').height($('.services-content').height())
})