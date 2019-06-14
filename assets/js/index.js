// Script to enable smooth scrolling on nav bar links

$('a[href^="#"]').not('.carousel-control-icons').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

$('#carouselHeader').on('slide',function(){
  $('.carousel-caption').fadeOut(300);
})
$('#carouselHeader').on('slid',function(){
  $('.carousel-caption').fadeIn(600);
})