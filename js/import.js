$(document).ready(function() {
      $(".import").each(function( index ) {
            var url = $(this).attr("title");
            var id = $(this + "+[href]").attr("href");
            alert(url + id);
            $(this + "+[href=url]").load(url);
      });
            
  });
