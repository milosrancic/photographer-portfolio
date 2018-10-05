$(function() {

	// fade all images except the one that is hovered
	$('img').hover(function() { // mouse over
		$(this).siblings().stop().fadeTo(400, 0.3);
		$(this).parent().siblings().stop().fadeTo(400, 0.3); 
}, function() { // mouse out
	$(this).siblings().stop().fadeTo(400, 1);
	$(this).parent().siblings().stop().fadeTo(400, 1);
});


	// smooth scroll to the top of the page by clicking arrow up
	$('.fa-arrow-up').click(function() {
		$('html, body').animate({scrollTop:$('.fa-home')
				.offset()
				.top}, '1000');
		return false;
	});


});
