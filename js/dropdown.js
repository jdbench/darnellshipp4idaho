$( document ).ready(function() {
    $('.core-value-heading').click(function(){
      $(this).parent().children('div:nth-child(2)').toggleClass('expanded');  
      $(this).parent().children('div:nth-child(2)').toggleClass('value-info');
      $(this).children('.core-value-heading').children('span').toggleClass('rotated-caret').toggleClass('caret');
    });
  });