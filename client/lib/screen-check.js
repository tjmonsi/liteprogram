screenCheck = function(c){  
  var windowHeight = $(window).innerHeight();
  $('.main-title-container').height(windowHeight-64);
  $('.main-title-container-2').height(windowHeight-64);
  $('.services').height($('.services-content').height())
  $('.parallax').parallax();
}

Tracker.autorun(screenCheck);