$(document).on('touchstart', function() {
    detectTap = true; // Detects all touch events
});
$(document).on('touchmove', function() {
    detectTap = false; // Excludes the scroll events from touch events
});
$(document).on('click touchend', function(event){
    if (event.type == "click") detectTap = true;
        if (detectTap){
	        $('#nav-icon').click(function(){
		        $(this).toggleClass('open');
                $('.main-nav').toggleClass('flex');
	        });
        }
});
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
        $('.main-nav').toggleClass('flex');
	});
});
