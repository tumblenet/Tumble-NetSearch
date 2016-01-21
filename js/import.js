$(document).ready(function() {
      $(".import").each(function( index ) {
      var url = $(this).attr("title");
      var id = $(this + "+[href]").attr("id");
      alert(url + id);
      $("[href").load(url);
  });
