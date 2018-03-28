self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('v1')
			.then(cache => {
				return cache.addAll(
					[
						'/',
						'index.html',
						'restaurant.html',
						'css/styles.css',
						'data/restaurants.json',
						'js/dbhelper.js',
						'js/main.js',
						'js/restaurant_info.js',
						'js/scripts.js',
						'img/filter.svg'
					]
				);
			}
		)
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });  
      });
    })
	);
});