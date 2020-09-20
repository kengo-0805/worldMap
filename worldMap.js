/* JavaScript (jQuery) */
$(function(){
    $('area').hover(
     function() { $(this).focus(); },
     function() { $(this).blur(); }
    )
  });