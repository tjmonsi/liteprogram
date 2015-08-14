Template.Home2.onRendered(function(){
  $('.parallax').parallax();
  screenCheck();
  $(window).resize(screenCheck)
})