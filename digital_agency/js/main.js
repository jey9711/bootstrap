$(window).scroll(function(){
  if ($('.navbar').offset().top > window.innerHeight) {
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }
});

$(function(){
  $('.page-scroll a').bind('click',function(){
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInExpo');
    event.preventDefault();
  });
})
