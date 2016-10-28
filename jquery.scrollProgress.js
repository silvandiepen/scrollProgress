$.fn.scrollProgress = function(options){
 		
    var self = $(this);
    // Set defaults
    var settings = $.extend({
      on: 'width',
      in: '%',
      position: 'fixed'
    },options);

		// Calculate the width
  	self.totalScroll = function totalScroll(){
      var totalScroll = ($(window).scrollTop()/($(document).outerHeight()-$(window).outerHeight()))*100;
      $(this).css(settings.on,totalScroll + settings.in);
    };
    
     // Initialize scroller
    self.scrollInit = function scrollInit(){
       if(settings.position){
        self.css('position',settings.position);
      }
    };
    
    // Set width and init on ready
    $(document).ready(function(){
      self.scrollInit();
    	self.totalScroll();
 		});
    
    // Set new width on scroll
    $(window).scroll(function(){
    	self.totalScroll();
    });
    
  };