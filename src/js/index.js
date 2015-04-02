global.jQuery = global.$ = require('jquery');
$(window).load(function(){
	// Navbar toogle button
	$('.responsive_toggle_button button').click(function(){
		$('.navbar').toggle('slow');
	});

	// Adaptive thumbnails
	var Masonry = require('masonry-layout');
		new Masonry ('.thumbs', {
			columnWidth: '.thumbnail',
			itemSelector: '.thumbnail',
			isAnimated: true,
			isResizable: true,
			singleMode: true,
		});

	// Footer stick
	var footerHight = 0,
	footerTop = 0,
	_footer = $('footer');

	(function positionFooter (){
		footerHeight = _footer.height();
		footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) +'px';
		if ($(document.body).height()+footerHeight < $(window).height()) {
			_footer.css({
				position: 'absolute',
				top: footerTop
			});
		} else {
			_footer.css({
				position: 'relative'
			});
		}
	})();

	// 404 error height
	var _errorHeight = $(window).height() - $('nav').height() - $('footer').height();
	$('.error').height(_errorHeight);

	//Margin top of post-nav content
	var _navHeight = $('nav').height();
	$('nav').next().css({
		'top': '20px',
		'margin-top': '20px'
	});
});
