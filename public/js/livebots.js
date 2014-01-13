(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
 
angular.module('livebots', [
  'ng',
  'ngRoute',
  'livebots.filters',
  'livebots.services',
  'livebots.directives',
  'livebots.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/'           , {templateUrl: 'partials/main/home.html'        , controller: 'home'});
  $routeProvider.when('/about'      , {templateUrl: 'partials/main/about.html'       , controller: 'about'});
  $routeProvider.when('/bot'        , {templateUrl: 'partials/bot/create.html'       , controller: 'createBot'});
  $routeProvider.when('/bot/:id'    , {templateUrl: 'partials/bot/bot.html'          , controller: 'bot'});
  $routeProvider.when('/welcome'    , {templateUrl: 'partials/account/welcome.html'  , controller: 'welcome'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
},{}],2:[function(require,module,exports){
'use strict';
 
livebotsController
  .controller('account', function ($scope) {
     
  });
},{}],3:[function(require,module,exports){
require('./account.js');
},{"./account.js":2}],4:[function(require,module,exports){
'use strict';
 
livebotsController
  .controller('bot', function ($scope) {
     
  });
},{}],5:[function(require,module,exports){
'use strict';

livebotsController
  .controller('createBot', function ($scope) {
    
  });
},{}],6:[function(require,module,exports){
require('./bot.js');
require('./createBot.js');
},{"./bot.js":4,"./createBot.js":5}],7:[function(require,module,exports){
livebotsController = angular.module('livebots.controllers', []);
 
require('./bot');
require('./main');
require('./account');
},{"./account":3,"./bot":6,"./main":10}],8:[function(require,module,exports){
'use strict';
 
livebotsController
  .controller('about', function ($scope) {
     
  });
},{}],9:[function(require,module,exports){
'use strict';

livebotsController
  .controller('home', function ($scope, $http) {
    
    $http.get(url_prefix + 'bots').success(function(data) {
      console.log(data);
      $scope.bots = data;
    });

    // var bots = Bots.query();
    // console.log(bots);
    // $scope.bots = bots;
  });
  
},{}],10:[function(require,module,exports){
require('./home.js');
require('./about.js');
},{"./about.js":8,"./home.js":9}],11:[function(require,module,exports){
'use strict';
 
angular.module('livebots.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
},{}],12:[function(require,module,exports){
'use strict';
 
 
angular.module('livebots.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
},{}],13:[function(require,module,exports){
'use strict';
 
var livebotsServices = angular.module('livebots.services', ['ngResource']);
 
livebotsServices
  .factory('Bots', function($resource) {
    return $resource(url_prefix + 'bots', {
      query: {method: 'GET'}
    });
  });
},{}],14:[function(require,module,exports){
var process=require("__browserify_process");url_prefix = process.env.NODE_ENV === 'production' ? 'http://api.livebots.cc/' : 'http://localhost:3000/';
 
require('./angularApp/app.js');
require('./angularApp/controllers');
require('./angularApp/directives');
require('./angularApp/filters');
require('./angularApp/services');
},{"./angularApp/app.js":1,"./angularApp/controllers":7,"./angularApp/directives":11,"./angularApp/filters":12,"./angularApp/services":13,"__browserify_process":15}],15:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[14])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2FuZ3VsYXJBcHAvYXBwLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2FuZ3VsYXJBcHAvY29udHJvbGxlcnMvYWNjb3VudC9hY2NvdW50LmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2FuZ3VsYXJBcHAvY29udHJvbGxlcnMvYWNjb3VudC9pbmRleC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2xpdmVib3RzL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9hbmd1bGFyQXBwL2NvbnRyb2xsZXJzL2JvdC9ib3QuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvYW5ndWxhckFwcC9jb250cm9sbGVycy9ib3QvY3JlYXRlQm90LmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2FuZ3VsYXJBcHAvY29udHJvbGxlcnMvYm90L2luZGV4LmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2FuZ3VsYXJBcHAvY29udHJvbGxlcnMvaW5kZXguanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvYW5ndWxhckFwcC9jb250cm9sbGVycy9tYWluL2Fib3V0LmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2FuZ3VsYXJBcHAvY29udHJvbGxlcnMvbWFpbi9ob21lLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2FuZ3VsYXJBcHAvY29udHJvbGxlcnMvbWFpbi9pbmRleC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2xpdmVib3RzL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9hbmd1bGFyQXBwL2RpcmVjdGl2ZXMvaW5kZXguanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvYW5ndWxhckFwcC9maWx0ZXJzL2luZGV4LmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2FuZ3VsYXJBcHAvc2VydmljZXMvaW5kZXguanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvbGl2ZWJvdHMuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG4gXG5hbmd1bGFyLm1vZHVsZSgnbGl2ZWJvdHMnLCBbXG4gICduZycsXG4gICduZ1JvdXRlJyxcbiAgJ2xpdmVib3RzLmZpbHRlcnMnLFxuICAnbGl2ZWJvdHMuc2VydmljZXMnLFxuICAnbGl2ZWJvdHMuZGlyZWN0aXZlcycsXG4gICdsaXZlYm90cy5jb250cm9sbGVycydcbl0pLlxuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlci53aGVuKCcvJyAgICAgICAgICAgLCB7dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9tYWluL2hvbWUuaHRtbCcgICAgICAgICwgY29udHJvbGxlcjogJ2hvbWUnfSk7XG4gICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9hYm91dCcgICAgICAsIHt0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL21haW4vYWJvdXQuaHRtbCcgICAgICAgLCBjb250cm9sbGVyOiAnYWJvdXQnfSk7XG4gICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9ib3QnICAgICAgICAsIHt0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2JvdC9jcmVhdGUuaHRtbCcgICAgICAgLCBjb250cm9sbGVyOiAnY3JlYXRlQm90J30pO1xuICAkcm91dGVQcm92aWRlci53aGVuKCcvYm90LzppZCcgICAgLCB7dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9ib3QvYm90Lmh0bWwnICAgICAgICAgICwgY29udHJvbGxlcjogJ2JvdCd9KTtcbiAgJHJvdXRlUHJvdmlkZXIud2hlbignL3dlbGNvbWUnICAgICwge3RlbXBsYXRlVXJsOiAncGFydGlhbHMvYWNjb3VudC93ZWxjb21lLmh0bWwnICAsIGNvbnRyb2xsZXI6ICd3ZWxjb21lJ30pO1xuICAkcm91dGVQcm92aWRlci5vdGhlcndpc2Uoe3JlZGlyZWN0VG86ICcvJ30pO1xufV0pOyIsIid1c2Ugc3RyaWN0JztcbiBcbmxpdmVib3RzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignYWNjb3VudCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgXG4gIH0pOyIsInJlcXVpcmUoJy4vYWNjb3VudC5qcycpOyIsIid1c2Ugc3RyaWN0JztcbiBcbmxpdmVib3RzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignYm90JywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICBcbiAgfSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5saXZlYm90c0NvbnRyb2xsZXJcbiAgLmNvbnRyb2xsZXIoJ2NyZWF0ZUJvdCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICBcbiAgfSk7IiwicmVxdWlyZSgnLi9ib3QuanMnKTtcbnJlcXVpcmUoJy4vY3JlYXRlQm90LmpzJyk7IiwibGl2ZWJvdHNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoJ2xpdmVib3RzLmNvbnRyb2xsZXJzJywgW10pO1xuIFxucmVxdWlyZSgnLi9ib3QnKTtcbnJlcXVpcmUoJy4vbWFpbicpO1xucmVxdWlyZSgnLi9hY2NvdW50Jyk7IiwiJ3VzZSBzdHJpY3QnO1xuIFxubGl2ZWJvdHNDb250cm9sbGVyXG4gIC5jb250cm9sbGVyKCdhYm91dCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgXG4gIH0pOyIsIid1c2Ugc3RyaWN0JztcblxubGl2ZWJvdHNDb250cm9sbGVyXG4gIC5jb250cm9sbGVyKCdob21lJywgZnVuY3Rpb24gKCRzY29wZSwgJGh0dHApIHtcbiAgICBcbiAgICAkaHR0cC5nZXQodXJsX3ByZWZpeCArICdib3RzJykuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICRzY29wZS5ib3RzID0gZGF0YTtcbiAgICB9KTtcblxuICAgIC8vIHZhciBib3RzID0gQm90cy5xdWVyeSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGJvdHMpO1xuICAgIC8vICRzY29wZS5ib3RzID0gYm90cztcbiAgfSk7XG4gICIsInJlcXVpcmUoJy4vaG9tZS5qcycpO1xucmVxdWlyZSgnLi9hYm91dC5qcycpOyIsIid1c2Ugc3RyaWN0JztcbiBcbmFuZ3VsYXIubW9kdWxlKCdsaXZlYm90cy5kaXJlY3RpdmVzJywgW10pXG4gIC5kaXJlY3RpdmUoJ2FwcFZlcnNpb24nLCBbJ3ZlcnNpb24nLCBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzKSB7XG4gICAgICBlbG0udGV4dCh2ZXJzaW9uKTtcbiAgICB9O1xuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuIFxuIFxuYW5ndWxhci5tb2R1bGUoJ2xpdmVib3RzLmZpbHRlcnMnLCBbXSkuXG4gIGZpbHRlcignaW50ZXJwb2xhdGUnLCBbJ3ZlcnNpb24nLCBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgIHJldHVybiBTdHJpbmcodGV4dCkucmVwbGFjZSgvXFwlVkVSU0lPTlxcJS9tZywgdmVyc2lvbik7XG4gICAgfVxuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuIFxudmFyIGxpdmVib3RzU2VydmljZXMgPSBhbmd1bGFyLm1vZHVsZSgnbGl2ZWJvdHMuc2VydmljZXMnLCBbJ25nUmVzb3VyY2UnXSk7XG4gXG5saXZlYm90c1NlcnZpY2VzXG4gIC5mYWN0b3J5KCdCb3RzJywgZnVuY3Rpb24oJHJlc291cmNlKSB7XG4gICAgcmV0dXJuICRyZXNvdXJjZSh1cmxfcHJlZml4ICsgJ2JvdHMnLCB7XG4gICAgICBxdWVyeToge21ldGhvZDogJ0dFVCd9XG4gICAgfSk7XG4gIH0pOyIsInZhciBwcm9jZXNzPXJlcXVpcmUoXCJfX2Jyb3dzZXJpZnlfcHJvY2Vzc1wiKTt1cmxfcHJlZml4ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwOi8vYXBpLmxpdmVib3RzLmNjLycgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7XG4gXG5yZXF1aXJlKCcuL2FuZ3VsYXJBcHAvYXBwLmpzJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXJBcHAvY29udHJvbGxlcnMnKTtcbnJlcXVpcmUoJy4vYW5ndWxhckFwcC9kaXJlY3RpdmVzJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXJBcHAvZmlsdGVycycpO1xucmVxdWlyZSgnLi9hbmd1bGFyQXBwL3NlcnZpY2VzJyk7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIl19
