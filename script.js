'use strict'

$(document).ready(function(){
  function hide () {
    $('.hide').hide();
  }

  hide();
  $('#portfolio').show();
  $('.portfolio-nav').on('click', function(){
    hide();
    $('#portfolio').show();
  });

  $('.about-nav').on('click',function(){
    hide();
    $('#about').show();

  });

  $('.contact-nav').on('click', function(){
    hide();
    $('#contact').show();
  });
});
