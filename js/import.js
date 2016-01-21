$(document).ready(function() {
    /*var id = $(".import").attr("id");
    var url = $(".import").attr("href");
    $("#" + id + " ,").load(.attr("href"));*/
    
    loadURL($(".import").attr("id"), $(".import").attr("href"));
    
    function loadURL(id, url) {
        $(".import, #" + id).load(url));
    }
    });
