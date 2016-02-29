
angular.module('sharingsmiles', []).controller('AboutusController',AboutusController);

function AboutusController($scope){
	// iPad and iPod detection  
  var isiPad = function(){
    return (navigator.platform.indexOf("iPad") != -1);
  };

  var isiPhone = function(){
      return (
      (navigator.platform.indexOf("iPhone") != -1) || 
      (navigator.platform.indexOf("iPod") != -1)
      );
  };



  // Carousel Feature Slide
  var owlCrouselFeatureSlide = function() {
    
    var owl = $('.owl-carousel');

    owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
      var current = elem.item.index;
      $(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
      $(elem.target).find(".owl-item").eq(current).find(".to-animate-2").removeClass('fadeInUp animated');
    
    });
    owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
      setTimeout(function(){
        var current = elem.item.index;
        $(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
      }, 700);
      setTimeout(function(){
        var current = elem.item.index;
        $(elem.target).find(".owl-item").eq(current).find(".to-animate-2").addClass('fadeInUp animated');
      }, 900);
      });
    owl.owlCarousel({
      items: 1,
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoHeight: true,
        smartSpeed: 500,
        autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
        navText: [  
          "<i class='icon-arrow-left2 owl-direction'></i>",
          "<i class='icon-arrow-right2 owl-direction'></i>"
        ]
    });

  };



  


  // // Burger Menu
  var burgerMenu = function() {

   $('body').on('click', '.js-fh5co-nav-toggle', function(event){

     if ( $('#navbar').is(':visible') ) {
       $(this).removeClass('active');  
     } else {
       $(this).addClass('active'); 
     }

     event.preventDefault();
      
   });

  };



function closeMenuMobile (){
    $("#wrapper-menu-mobile .wrapper").animate({ right:"-100%"},300,function(){
        $("#wrapper-menu-mobile").animate({opacity:0},200,function(){
            $("#wrapper-menu-mobile").css({left:"100%", opacity:1});
            jQuery(document.body).css('overflow', 'auto');
        });
    });
}


  // Page Nav
  var clickMenu = function() {
        $("#menubtn").click(function(){
        $("#wrapper-menu-mobile").css({left:0, opacity:0});
        $("#wrapper-menu-mobile").animate({opacity:1},200);
        $("#wrapper-menu-mobile .wrapper").animate({ right:"0"},300);
        jQuery(document.body).css('overflow', 'hidden');
        return false;
    });

    $("#bt-fechar-menu").click(function(){
        closeMenuMobile ();
        return false;
    });

    $(".block-menu-mobile").mousedown(function(){
        closeMenuMobile ();
    });
  };

  // Reflect scrolling in navigation
  var navActive = function(section) {

    var $el = $('#navbar > ul');
    $el.find('li').removeClass('active');
    $el.each(function(){
      $(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
    });

  };
  var navigationSection = function() {

    var $section = $('div[data-section]');
    
    $section.waypoint(function(direction) {
        if (direction === 'down') {
          navActive($(this.element).data('section'));
        
        }
    }, {
        offset: '150px'
    });

    $section.waypoint(function(direction) {
        if (direction === 'up') {
          navActive($(this.element).data('section'));
        }
    }, {
        offset: function() { return -$(this.element).height() + 155; }
    });

  };


  // Window Scroll
  var windowScroll = function() {
    var lastScrollTop = 0;

    $(window).scroll(function(event){

        var header = $('#fh5co-header'),
        scrlTop = $(this).scrollTop();

      if ( scrlTop > 500 && scrlTop <= 2000 ) {
        header.addClass('navbar-fixed-top fh5co-animated slideInDown');
      } else if ( scrlTop <= 500) {
        if ( header.hasClass('navbar-fixed-top') ) {
          header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
          setTimeout(function(){
            header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
          }, 100 );
        }
      } 
      
    });
  };



  // Animations

  // About Us
  var aboutAnimate = function() {

    if ( $('#about-us').length > 0 ) {  
      $('#about-us .to-animate').each(function( k ) {
        
        var el = $(this);
        
        setTimeout ( function () {
          el.addClass('fadeInUp animated');
        },  k * 200, 'easeInOutExpo' );
        
      });
    }

  };
  var aboutWayPoint = function() {

    if ( $('#about-us').length > 0 ) {
      $('#about-us').waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this).hasClass('animated') ) {


          setTimeout(aboutAnimate, 200);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '95%' } );
    }

  };

  


  
  

  // Document on load.
  $(function(){

  
    owlCrouselFeatureSlide();
    windowScroll();
    navigationSection();
        clickMenu ();
    aboutWayPoint();
    
  });
   }