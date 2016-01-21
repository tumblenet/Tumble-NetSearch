$(document).ready(function() {
    var url = $(this).attr("href");
    var id = $(this).attr("id");
    $(this).load(url);
    
   if (document.querySelectorAll)
        var clsElements = document.querySelectorAll(".import");
        var url = $(clsElements).attr("href");
        //var id = $(clsElements).attr("id");
        $(clsElements).load(url);
        else
        // loop through all elements instead
    });
