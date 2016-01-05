$(function(){
    
});

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
    var original_height = $('.nav').height();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('nav').css('background-color', 'rgba(34,34,34,0.9)').css('height', '100px');
       } else {
          $('nav').css('background-color', 'transparent').css('height', original_height);
       }
   });
});