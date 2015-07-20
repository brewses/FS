$(function() {
  $(".expand").on( "click", function() {
    $(this).next().slideToggle(200);
      
    $(this).toggleClass("aside-closed-triangle aside-open-triangle");
    return false;
  });
});