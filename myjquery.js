$(function () {
$('.dropelem').each(function () {
$(this).parent().eq(0).hover(function () {
$('.dropelem:eq(0)', this).show(400);
}, function () {
$('.dropelem:eq(0)', this).hide(400);
});
});
});