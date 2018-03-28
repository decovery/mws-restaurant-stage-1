window.onload = function() {
	var mapToggle = document.querySelector('#map-toggle');
	var map = document.querySelector('#map-container');

	mapToggle.addEventListener('click', function(e) {
		map.classList.toggle('open');
		// if(map.hasAttribute('aria-hidden')) {
		// 	map.removeAttribute('aria-hidden');
		// } else {
		// 	map.setAttribute('aria-hidden', true);
		// }
		e.stopPropagation();
	});
};