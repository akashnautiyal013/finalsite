

angular.module('sharingsmiles', [])
  
.controller('ExController',ExController);

function ExController($scope,$http){
  
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
  var loader = function(){
    $( "#loader" ).delay(2000).fadeOut(400, function(){
        $( "body" ).fadeIn(400);
    });  
};


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
  $(".sendsmstome").on("click", function() {
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
    windowScroll();
    loader();
    });

} 


