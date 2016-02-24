
angular.module('sharingsmiles', []).controller('AboutusController',AboutusController);

function AboutusController($scope){
	new WOW().init();
	$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

/*!
 * classie v1.0.0
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );



/**
 * The nav stuff
 */
(function( window ){
	
	'use strict';

	var body = document.body,
		mask = document.createElement("div"),
		toggleSlideLeft = document.querySelector( ".toggle-slide-left" ),
		toggleSlideLeft2 = document.querySelector( ".toggle-slide-left" ),
	/*	toggleSlideRight = document.querySelector( ".toggle-slide-right" ),
		toggleSlideTop = document.querySelector( ".toggle-slide-top" ),
		toggleSlideBottom = document.querySelector( ".toggle-slide-bottom" ),
		togglePushLeft = document.querySelector( ".toggle-push-left" ),
		togglePushRight = document.querySelector( ".toggle-push-right" ),
		togglePushTop = document.querySelector( ".toggle-push-top" ),
		togglePushBottom = document.querySelector( ".toggle-push-bottom" ),*/
		slideMenuLeft = document.querySelector( ".slide-menu-left" ),
		slideMenuLeft2 = document.querySelector( ".slide-menu-left" ),
	/*	slideMenuRight = document.querySelector( ".slide-menu-right" ),
		slideMenuTop = document.querySelector( ".slide-menu-top" ),
		slideMenuBottom = document.querySelector( ".slide-menu-bottom" ),
		pushMenuLeft = document.querySelector( ".push-menu-left" ),
		pushMenuRight = document.querySelector( ".push-menu-right" ),
		pushMenuTop = document.querySelector( ".push-menu-top" ),
		pushMenuBottom = document.querySelector( ".push-menu-bottom" ),*/
		activeNav
	;
	mask.className = "mask";

	/* slide menu left */
	toggleSlideLeft.addEventListener( "click", function(){
		classie.add( body, "sml-open" );
		document.body.appendChild(mask);
		activeNav = "sml-open";
	} );

	toggleSlideLeft2.addEventListener( "click", function(){
		classie.add( body, "sml-open" );
		document.body.appendChild(mask);
		activeNav = "sml-open";
	} );
	
	/* slide menu right
	toggleSlideRight.addEventListener( "click", function(){
		classie.add( body, "smr-open" );
		document.body.appendChild(mask);
		activeNav = "smr-open";
	} );*/

	/* slide menu top 
	toggleSlideTop.addEventListener( "click", function(){
		classie.add( body, "smt-open" );
		document.body.appendChild(mask);
		activeNav = "smt-open";
	} );*/

	/* slide menu bottom 
	toggleSlideBottom.addEventListener( "click", function(){
		classie.add( body, "smb-open" );
		document.body.appendChild(mask);
		activeNav = "smb-open";
	} );*/

	/* push menu left
	togglePushLeft.addEventListener( "click", function(){
		classie.add( body, "pml-open" );
		document.body.appendChild(mask);
		activeNav = "pml-open";
	} );*/

	/* push menu right 
	togglePushRight.addEventListener( "click", function(){
		classie.add( body, "pmr-open" );
		document.body.appendChild(mask);
		activeNav = "pmr-open";
	} );*/

	/* push menu top 
	togglePushTop.addEventListener( "click", function(){
		classie.add( body, "pmt-open" );
		document.body.appendChild(mask);
		activeNav = "pmt-open";
	} );*/

	/* push menu bottom 
	togglePushBottom.addEventListener( "click", function(){
		classie.add( body, "pmb-open" );
		document.body.appendChild(mask);
		activeNav = "pmb-open";
	} );*/

	/* hide active menu if mask is clicked */
	mask.addEventListener( "click", function(){
		classie.remove( body, activeNav );
		activeNav = "";
		document.body.removeChild(mask);
	} );

	/* hide active menu if close menu button is clicked */
	[].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav );
			activeNav = "";
			document.body.removeChild(mask);
		} );
	});


})( window );

   }