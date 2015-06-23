$(document).ready(function(){

	// GA Event Tracking
	$('.event-tracking').click(function(e){
		e.preventDefault();

		// fire event tracking
		ga('send', 'event', 'button', 'click', 'conversion');
		ga('secondary.send', 'event', 'button', 'click', 'conversion');
	});

	// GA Virtual Pageview Tracking
	$('.virtual-pageview').click(function(e){
		e.preventDefault();

		// set the new page
		$('nav a').removeClass('active');
		$(this).addClass('active');
		$('header h2').text('Page 3 - Virtual Pageview');

		// define pageview tracking data
		var pageview = {
			'page': $(this).attr('href'),
			'title': $(this).text()
		};

		// fire virtual pageview tracking
		ga('send', 'pageview', pageview);
		ga('secondary.send', 'pageview', pageview);
	});

});
