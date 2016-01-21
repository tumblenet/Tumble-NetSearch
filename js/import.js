$(document).ready(function() {
      var url = $(".import").attr("title");
 +    var id = $(".import").attr("id");
      alert(url + id);
      $("#" + id).load(url);
  });
