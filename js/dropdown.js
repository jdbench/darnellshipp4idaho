$( document ).ready(function() {
    $('#dt1').click(function(e) {
      e.preventDefault();
      $('#dropdown-trigger .caret-dropdown').toggleClass('active-dropdown');
    });
  });