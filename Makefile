all: dist/livebots.css dist/livebots.js

dist/livebots.css: clientApp/css/*.scss
	node_modules/.bin/node-sass clientApp/css/livebots.scss public/css/livebots.css

dist/livebots.js: clientApp/js/**/*.js
	node_modules/.bin/browserify -t brfs --debug -e clientApp/js/livebots.js -o public/js/livebots.js

clean:
	rm -f public/css/livebots.css public/js/livebots.js