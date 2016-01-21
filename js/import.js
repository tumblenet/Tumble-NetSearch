/*var id = $(".import").attr("id");
var url = $(".import").attr("href");
$("#" + id + " ,").load(.attr("href"));*/

$(function() {
    $(.import).attr("id").getURL(id);
});

$( "#import" ).load(function() {
    var id = $(this).attr("id");
    alert(id;)
    var url = $(this).attr("href");
    $("#" + id).load(.attr("href"));
});
