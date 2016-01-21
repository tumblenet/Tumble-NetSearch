/*var id = $(".import").attr("id");
var url = $(".import").attr("href");
$("#" + id + " ,").load(.attr("href"));*/
$(".import+[href]").load(function() {
    var id = $(this).attr("id");
    alert(id);
    var url = $(this).attr("href");
    $(this).load(html);
});
