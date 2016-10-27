$(window).on('scroll', function() {
  var winScroll = $(this).scrollTop();

  $('#branch-left').css({
    'transform': 'translate(-' + winScroll / 10 + '%, 0px)'
  });

  $('#branch-right').css({
    'transform': 'translate(+' + winScroll / 10 + '%, 0px)'
  });

  $('#vader').css({
    'transform': 'translateY(+' + winScroll / 10 + '%)'
  });

});
