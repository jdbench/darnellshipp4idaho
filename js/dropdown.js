$( document ).ready(function() {
    $('.core-value-heading').click(function(){
      $(this).parent().children('div:nth-child(2)').toggleClass('expanded');  
      $(this).parent().children('div:nth-child(2)').toggleClass('value-info');
      $(this).children('span').toggleClass('rotated-caret');
    });
  });