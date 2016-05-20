var main = function() {

  $('.carousel-inner').mouseenter(function(){
    $(".chevron").fadeIn(1000);
  }).mouseleave(function(){
    $('.chevron').fadeOut(1000);
  });

  $('i#nextImage').click(function(){
    $('ul.carousel-images').animate({
      left: '-=500px'}, 300, function(){} );
  });

  $('i#prevImage').click(function(){
    $('ul.carousel-images').animate({
      left: '+=500px'}, 300, function(){} );
  })


}

$(document).ready(main);
