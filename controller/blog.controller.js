angular.module('sharingsmiles', [])
.controller('BlogController',BlogController);

function BlogController($scope,$http){

   $http.get("/news.json").success(function (data){
        $scope.blogs = data;
    });
   
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
 $('.arrow').on("click", function (event) {
    $('.arrow-img').toggleClass('rotate');
    $('.arrow-img').toggleClass('rotate2');
});

$(document).ready(function () {
	$('#nav').children('li').first().children('a').addClass('active')        .next().addClass('is-open').show();            $('#nav').on('click', 'li > a', function() {              if (!$(this).hasClass('active')) {        $('#nav .is-open').removeClass('is-open').hide();        $(this).next().toggleClass('is-open').toggle();                  $('#nav').find('.active').removeClass('active');        $(this).addClass('active');      } else {        $('#nav .is-open').removeClass('is-open').hide();        $(this).removeClass('active');      }   });});
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



function closeMenuMobile (){
    $("#wrapper-menu-mobile .wrapper").animate({ right:"-100%"},300,function(){
        $("#wrapper-menu-mobile").animate({opacity:0},200,function(){
            $("#wrapper-menu-mobile").css({left:"100%", opacity:1});
            jQuery(document.body).css('overflow', 'auto');
        });
    });
}


  // Page Nav

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

      if ( scrlTop > 300 && scrlTop <= 2000 ) {
        header.addClass('navbar-fixed-top fh5co-animated slideInDown');
      } else if ( scrlTop <= 300) {
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
  });


	
}