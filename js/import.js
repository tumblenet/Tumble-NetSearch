$(document).ready(function() {
    var url = $(".import");.getAttribute("title");
    $(".import[title=" + url + "]").load(url);
    alert(url);
});
