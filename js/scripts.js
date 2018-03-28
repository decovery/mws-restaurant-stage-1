window.onload = function() {
	var mapToggle = document.querySelector('#map-toggle');
	var map = document.querySelector('#map-container');

	mapToggle.addEventListener('click', function(e) {
		map.classList.toggle('open');
		e.stopPropagation();
	});
};