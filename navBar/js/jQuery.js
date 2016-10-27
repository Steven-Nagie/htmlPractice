$(document).ready(function() {
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('header').addClass('small');
      $('h3').addClass('logo-small');
    } else {
      $('header').removeClass('small');
      $('h3').removeClass('logo-small');
    }
  });
});
