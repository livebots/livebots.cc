all: dist/livebots.js

dist/livebots.js: lib/js/**/*.js
	node_modules/.bin/browserify -t brfs --debug -e clientApp/js/livebots.js -o public/js/livebots.js
clean:
	rm -f public/js/livebots.js