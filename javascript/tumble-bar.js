$(document).ready(function(){ 
  $.get("http://search.tumblenet.tk/tumble-bar.html", function(data) {
    $("#TumbleBar").html(data);
  });
}); 
