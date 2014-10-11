//HeaderResize
$(function(){
  $('#Header').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 100)
{
    if($('#Header').data('size') == 'big')
    {
        $('#Header').data('size','small');
        $('#Header').stop().animate({
            height:'50px'
        },600);
        $("#HeaderLogo").stop().hide();
        $("#HeaderScripture").stop().hide();
        $("#HeaderLogoText").stop().show(500);
    }
}
else
  {
    if($('#Header').data('size') == 'small')
      {
        $('#Header').data('size','big');
        $('#Header').stop().animate({
            height:'120px'
        },600);
        $('#HeaderLogo').stop().show("linear");
        $("#HeaderScripture").stop().show("linear");
        $('#HeaderLogoText').stop().hide();
      }  
  }
});