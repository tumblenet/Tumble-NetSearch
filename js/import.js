$(document).ready(function($(".import")) {
    var url = $(this).attr("href");
    var id = $(this).attr("id");
    $(this).load(url);
});
