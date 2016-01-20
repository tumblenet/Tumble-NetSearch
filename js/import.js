$(document).ready(function() {
    var id = $(".import").attr("id");
    $("#" + id).load($("#" + id).attr("href"));
    delete url;
    delete id;
});
