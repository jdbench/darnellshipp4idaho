$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
        $('.main-nav').toggleClass('flex');
	});
});