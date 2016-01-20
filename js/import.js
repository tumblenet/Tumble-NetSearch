$(document).ready(function() {
    var url = $(".import").attr("href");
    var id = $(".import").attr("url");
    alert(url + id);
    $("#" + id).load(url);
});
