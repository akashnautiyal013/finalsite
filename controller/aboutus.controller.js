
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



  



  


  // // Burger Menu
  var burgerMenu = function() {
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
    });1
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

		$('a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');
		    $('html, body').animate({
		        scrollTop: $('[data-section="' + section + '"]').offset().top
		    }, 500);

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
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



  


  
  

  // Document on load.
  $(function(){
  	burgerMenu();
    windowScroll();
    navigationSection();
    navActive();
    clickMenu();

    
  });


 }