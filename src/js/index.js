global.jQuery = global.$ = require('jquery');

// Navbar toogle button
$('.responsive_toggle_button button').click(function(){
	$('.navbar').toggle('slow');
});