$( "#tabs" ).tabs();
$( "#tabs2" ).tabs();
$( "#timeline" ).tabs();
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 800,
      paginationSpeed : 800,
      singleItem:true,
      navigationText: false
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

$(document).ready(function() {
    $(".fancybox").fancybox();
  });

$(document).ready(function() {
  $('#vertical').lightSlider({
    gallery:true,
    item:1,
    vertical:true,
    verticalHeight:295,
    vThumbWidth:145,
    vThumbHeight:90,
    thumbItem:3,
    thumbMargin:4,
    slideMargin:5,
    loop: true,
    speed: 600
  });  
});

$.stellar();