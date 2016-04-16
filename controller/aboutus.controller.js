
angular.module('sharingsmiles', []).controller('AboutusController',AboutusController);

function AboutusController($scope,$http){
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



  


$scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
  


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



   $scope.formData = {};

        // process the form
        $scope.processForm = function () {
            $http({
                method: 'POST',
                url: 'index.php',
                data: $.param($scope.formData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function (data) {
                    console.log(data);

                    if (!data.success) {
                        // if not successful, bind errors to error variables
                        $scope.errorName = data.errors.name;
                        $scope.errorSuperhero = data.errors.superheroAlias;
                    } 
                    else {
                        // if successful, bind success message to message
                        $scope.message = data.message;
                    
                    }
                });

        };

  var loader = function(){
    $( "#loader" ).delay(2000).fadeOut(400, function(){
        $( "body" ).fadeIn(400);
    });  
};
//Setting the height to the window height
$(document).ready(function() {

  //variables
  var name = $(".nombre input");
  email = $(".correo input");
  comment = $(".palabras textarea");
  modal_name = $(".modal span");
  modal = $(".modal");

  //hide modal
  modal.hide();

  //check if name is empty
  name.on("blur", function() {
    var $this = $(this);
    if ($this.val().length === 0 ||
      $this.val() === "Name") {
      $this.addClass("invalid");
      $this.val("Name");
    } else {
      $this.addClass("valid");
    }
  });

  //check if email is empty
  email.on("blur", function() {
    var $this = $(this);
    if ($this.val().length === 0 ||
      $this.val() === "Email") {
      $this.addClass("invalid");
    }
  });

  //check if email is valid
  email.on("blur", function() {
    var $this = $(this);
    if ($this.val().indexOf("." && "@") > -1) {
      $this.addClass("valid");
    } else {
      $this.addClass("invalid");
      $this.val("Email");
    }
  });

  //check if textarea is empty
  comment.on("blur", function() {
    var $this = $(this);
    if ($this.val() === "") {
      $this.addClass("invalid");
      $this.val("Comments");
    } else {
      $this.addClass("valid");
    }
  });

  //clear inputs on click
  $(".input").on("focus", function() {
    $(this).val("");
  });

  //show modal when inputs are valid and button
  //is clicked
  $(".submit").on("click", function() {
    if (name.val() !== "Name" && name.val() !== "" &&
      email.val() !== "Email" &&
      email.val() !== "" &&
      comment.val() !== "Comments" &&
      comment.val() !== "") {

      //remove invalid/valid classes
      name.removeClass().addClass("input");
      email.removeClass().addClass("input");
      comment.removeClass().addClass("input");

      //modal box
      modal_name.text(name.val());
      modal.slideDown("medium")
        .delay(2000).slideUp("fast");

      //put default text back
      name.val("Name");
      email.val("Email");
      comment.val("Comments");

      return false;

    } else {

      return false;
    }
  });

});
  

  // Document on load.
  $(function(){
    loader();
  	burgerMenu();
    windowScroll();
       

    
  });
 }

