$(document).ready(function() {
      $(".import").each(function( index ) {
            var url = $(this).attr("title");
            var id = $(this).attr("href");
            $(this).load(url);
      });
            
  });
