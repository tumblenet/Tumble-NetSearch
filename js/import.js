$(document).ready(function() {
    
   if (document.querySelectorAll) {
        var clsElements = document.querySelectorAll(".import");
        var url = $(clsElements).attr("href");
        var id = $(clsElements).attr("id");
        alert(id);
        $(clsElements).load(url);
       
   } else {
        // loop through all elements instead
    }
