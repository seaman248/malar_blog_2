global.jQuery = global.$ = require('jquery');
$(window).load(function(){
	// Navbar toogle button
	$('.responsive_toggle_button button').click(function(){
		$('.navbar').toggle('slow');
	});

	// Adaptive 
	var Masonry = require('masonry-layout');

	new Masonry ('.thumbs', {
		columnWidth: '.thumbnail',
		itemSelector: '.thumbnail',
		isAnimated: true,
		isResizable: true,
		singleMode: true,
	})
})
