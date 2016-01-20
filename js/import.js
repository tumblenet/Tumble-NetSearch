$(document).ready(function() {
    var url = $(".import").attr("href");
    var id = $(".import").attr("id");
    alert(url + id);
    $("#" + id).load(url);
});
