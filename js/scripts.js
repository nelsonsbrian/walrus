$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
 $(".fadeclick").click(function(){
   $("img").fadeToggle();

 });
});
