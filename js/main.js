import { createFooterYear, createFooter, createHeader, fontAwesome } from "./utils.js";

window.onload=function(){
    createHeader();
    createFooter();
    createFooterYear();
    fontAwesome();
}

$( document ).ready(function() {
    $('.core-value-heading').click(function(){
      $(this).parent().children('div:nth-child(2)').toggleClass('expanded');  
      $(this).parent().children('div:nth-child(2)').toggleClass('value-info');
      $(this).children('span').toggleClass('rotated-caret');
    });
  });