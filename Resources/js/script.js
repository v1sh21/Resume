$(document).ready(function(){
    /*for sticky navigation */
 $('.js--section-about').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
  offset: '60px;'
});
    
    /*nav scroll */
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
     /*Animations on scroll */
    
    $('.js--wp-1').waypoint(function(direction){
        
        $('.js--wp-1').addClass('animated fadeInUp');
    },{
        offset:'50%'
    });
    
     $('.js--wp-2').waypoint(function(direction){
        
        $('.js--wp-2').addClass('animated fadeInLeft');
    },{
        offset:'50%'
    });
    
     $('.js--wp-3').waypoint(function(direction){
        
        $('.js--wp-3').addClass('animated fadeInRight');
    },{
        offset:'50%'
    });
    
     $('.js--wp-4').waypoint(function(direction){
        
        $('.js--wp-4').addClass('animated slideInLeft');
         
    },{
        offset:'50%'
    });
    
    $('.js--wp-5').waypoint(function(direction){
        
        $('.js--wp-5').addClass('animated slideInRight');
        
    },{
        offset:'80%'
    });
    
    /*Animations on hover */
    
    $('h2').hover(
       function(){ $(this).addClass('hvr-grow') },
       function(){ $(this).removeClass('hvr-grow') }
);
   
    
    /*mobile nav */
    $('.--js-nav-icon').click(function(){
        
        var nav=$('.--js-main-nav');
    
        nav.slideToggle(200);
        
    });
});