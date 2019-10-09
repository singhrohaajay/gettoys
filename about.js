$('.readmore').click(function() {
    $('.content').toggleClass('full');
    $('.header1').toggleClass('collapse');
    $('.readmore').toggle();
  });
  $('.closebttn').click(function() {
    $('.content').removeClass('full');
    $('.header1').removeClass('collapse');
    $('.readmore').toggle();
  });