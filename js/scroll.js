
    jQuery(document).ready(function() {
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1000) {
      jQuery('.logo').addClass('logoscroll');
    } else{
         jQuery('.logo').removeClass('logoscroll');
    }
  });
});

