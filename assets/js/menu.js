//home  page text animation action
$(function() {
  $(".typed").typed({
    strings:["Web Design.","^1000 MEAN Stack Developer.","^1000 Android Developer.","^1000 App Developer."],
    loop:true,
    smartBackspace: true
  });
  });
  function toggleMenu(ref) {
    ref.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
    var div = document.getElementById('menu');
    if (div.style.display !== 'none') {
        div.style.visibility = "visible";
    }
    else {
      div.style.visibility = "hidden";
    }
  }
  $(document).ready(function(){
    AOS.init({
      offset: 200,
      duration: 1000,
    });
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.about_section').offset().top }, 'slow');
      return false;
    });
    /*
    //portfolio 
    $('.hidden').css('display','none');

  $( "#filter button" ).each(function() {

    $(this).on("click", function(){

         var filter = $(this).attr('class');         

      if ( $(this).attr('class') == 'all' ) {
         $('.hidden').contents().appendTo('#posts').hide().show('slow');
         $( "#filter button" ).removeClass('active');
         $(this).addClass('active');
         $("#filter button").attr("disabled", false);
         $(this).attr("disabled", true);
      }
      else {
         $('.post').appendTo('.hidden');
         $('.hidden').contents().appendTo('#posts').hide().show('slow');
         $('.post:not(.' + filter + ')').appendTo('.hidden').hide('slow');
         $( "#filter button" ).removeClass('active');
         $(this).addClass('active');
         $("#filter button").attr("disabled", false);
         $(this).attr("disabled", true);
      };
      
      });

  });
  */
 $('button.btn-gallery').on('click', function(event) {
  event.preventDefault();
  
  var gallery = $(this).attr('href');
  
  $(gallery).magnificPopup({
    delegate: 'a',
    type:'image',
    gallery: {
      enabled: true
    }
  }).magnificPopup('open');
});
$('[data-resizetext="true"]').each(function(){
  $(this).fontScale();
})
    //refresh page on browser resize
  /* handel resize window 
  $(window).on('resize', function() {
    $('[data-resizetext="true"]').each(function(){
      $(this).fontScale();
    })
    //this.location.reload(false);
  });*/
  // ===== Scroll to Top ==== 
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
  });
    $(window).scroll(function(){
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    });
    $('[data-spy="scroll"]').each(function () {
      $(this).scrollspy('refresh');
    }); 
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });