$(document).ready(function() {
    var id = $(".import").attr("id");
    alert(url + id);
    $("#" + id).load($("#" + id).attr("href"));
    delete url;
    delete id;
});
