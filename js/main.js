$(window).ready(updateHeight);
$(window).resize(updateHeight);
function updateHeight() {
    var div = $(".resize");
    var newWidth = div.width() * 1.15;

    div.css("height", newWidth);
  }
