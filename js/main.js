$(window).ready(updateHeight);
$(window).resize(updateHeight);
function updateHeight() {
    var div = $(".resize");
    var newWidth = div.width() * 1.15;

    div.css("height", newWidth);
  }




  // media query event handler
  if (matchMedia) {
    var mq = window.matchMedia("(min-width: 500px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      $(".fa").addClass('fa-2x')
      $("#home-btn").addClass('active-home')
      // $("#writing-btn").addClass('active-writing')
      // $("#resume-btn").addClass('active-resume')
      // $("#about-btn").addClass('active-about')

      $("#writing-btn").hover(function() {
        $(this).addClass('active-writing');
      }, function() {
        $(this).removeClass('active-writing')
      });

      $("#resume-btn").hover(function() {
        $(this).addClass('active-resume');
      }, function() {
        $(this).removeClass('active-resume')
      });

      $("#about-btn").hover(function() {
        $(this).addClass('active-about');
      }, function() {
        $(this).removeClass('active-about')
      });



    } else {
      $(".fa").removeClass('fa-2x')
      $("#home-btn").removeClass('active-home')
      // $("#writing-btn").removeClass('active-writing')
      // $("#resume-btn").removeClass('active-resume')
      // $("#about-btn").removeClass('active-about')
    }

  }
