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
var process=require("__browserify_process");url_prefix = process.env.NODE_ENV === 'production' ? 'http://api.livebots.cc/' : 'http://localhost:3000/';
 
require('./app.js');
require('./controllers');
require('./directives.js');
require('./filters.js');
require('./services.js');
},{"./app.js":1,"./controllers":7,"./directives.js":11,"./filters.js":12,"./services.js":14,"__browserify_process":15}],14:[function(require,module,exports){
'use strict';
 
var livebotsServices = angular.module('livebots.services', ['ngResource']);
 
livebotsServices
  .factory('Bots', function($resource) {
    return $resource(url_prefix + 'bots', {
      query: {method: 'GET'}
    });
  });
},{}],15:[function(require,module,exports){
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
            if (ev.source === window && ev.data === 'process-tick') {
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

},{}]},{},[13])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvYXBwLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2NvbnRyb2xsZXJzL2FjY291bnQvYWNjb3VudC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2xpdmVib3RzL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9hY2NvdW50L2luZGV4LmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2NvbnRyb2xsZXJzL2JvdC9ib3QuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvYm90L2NyZWF0ZUJvdC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2xpdmVib3RzL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9ib3QvaW5kZXguanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvaW5kZXguanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvbWFpbi9hYm91dC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2xpdmVib3RzL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9tYWluL2hvbWUuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvbWFpbi9pbmRleC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2xpdmVib3RzL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9kaXJlY3RpdmVzLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2ZpbHRlcnMuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvbGl2ZWJvdHMuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvc2VydmljZXMuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuIFxuYW5ndWxhci5tb2R1bGUoJ2xpdmVib3RzJywgW1xuICAnbmcnLFxuICAnbmdSb3V0ZScsXG4gICdsaXZlYm90cy5maWx0ZXJzJyxcbiAgJ2xpdmVib3RzLnNlcnZpY2VzJyxcbiAgJ2xpdmVib3RzLmRpcmVjdGl2ZXMnLFxuICAnbGl2ZWJvdHMuY29udHJvbGxlcnMnXG5dKS5cbmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgJHJvdXRlUHJvdmlkZXIud2hlbignLycgICAgICAgICAgICwge3RlbXBsYXRlVXJsOiAncGFydGlhbHMvbWFpbi9ob21lLmh0bWwnICAgICAgICAsIGNvbnRyb2xsZXI6ICdob21lJ30pO1xuICAkcm91dGVQcm92aWRlci53aGVuKCcvYWJvdXQnICAgICAgLCB7dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9tYWluL2Fib3V0Lmh0bWwnICAgICAgICwgY29udHJvbGxlcjogJ2Fib3V0J30pO1xuICAkcm91dGVQcm92aWRlci53aGVuKCcvYm90JyAgICAgICAgLCB7dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9ib3QvY3JlYXRlLmh0bWwnICAgICAgICwgY29udHJvbGxlcjogJ2NyZWF0ZUJvdCd9KTtcbiAgJHJvdXRlUHJvdmlkZXIud2hlbignL2JvdC86aWQnICAgICwge3RlbXBsYXRlVXJsOiAncGFydGlhbHMvYm90L2JvdC5odG1sJyAgICAgICAgICAsIGNvbnRyb2xsZXI6ICdib3QnfSk7XG4gICRyb3V0ZVByb3ZpZGVyLndoZW4oJy93ZWxjb21lJyAgICAsIHt0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2FjY291bnQvd2VsY29tZS5odG1sJyAgLCBjb250cm9sbGVyOiAnd2VsY29tZSd9KTtcbiAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHtyZWRpcmVjdFRvOiAnLyd9KTtcbn1dKTsiLCIndXNlIHN0cmljdCc7XG4gXG5saXZlYm90c0NvbnRyb2xsZXJcbiAgLmNvbnRyb2xsZXIoJ2FjY291bnQnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgIFxuICB9KTsiLCJyZXF1aXJlKCcuL2FjY291bnQuanMnKTsiLCIndXNlIHN0cmljdCc7XG4gXG5saXZlYm90c0NvbnRyb2xsZXJcbiAgLmNvbnRyb2xsZXIoJ2JvdCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgXG4gIH0pOyIsIid1c2Ugc3RyaWN0JztcblxubGl2ZWJvdHNDb250cm9sbGVyXG4gIC5jb250cm9sbGVyKCdjcmVhdGVCb3QnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgXG4gIH0pOyIsInJlcXVpcmUoJy4vYm90LmpzJyk7XG5yZXF1aXJlKCcuL2NyZWF0ZUJvdC5qcycpOyIsImxpdmVib3RzQ29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKCdsaXZlYm90cy5jb250cm9sbGVycycsIFtdKTtcbiBcbnJlcXVpcmUoJy4vYm90Jyk7XG5yZXF1aXJlKCcuL21haW4nKTtcbnJlcXVpcmUoJy4vYWNjb3VudCcpOyIsIid1c2Ugc3RyaWN0JztcbiBcbmxpdmVib3RzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignYWJvdXQnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgIFxuICB9KTsiLCIndXNlIHN0cmljdCc7XG5cbmxpdmVib3RzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignaG9tZScsIGZ1bmN0aW9uICgkc2NvcGUsICRodHRwKSB7XG4gICAgXG4gICAgJGh0dHAuZ2V0KHVybF9wcmVmaXggKyAnYm90cycpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAkc2NvcGUuYm90cyA9IGRhdGE7XG4gICAgfSk7XG5cbiAgICAvLyB2YXIgYm90cyA9IEJvdHMucXVlcnkoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhib3RzKTtcbiAgICAvLyAkc2NvcGUuYm90cyA9IGJvdHM7XG4gIH0pO1xuICAiLCJyZXF1aXJlKCcuL2hvbWUuanMnKTtcbnJlcXVpcmUoJy4vYWJvdXQuanMnKTsiLCIndXNlIHN0cmljdCc7XG4gXG5hbmd1bGFyLm1vZHVsZSgnbGl2ZWJvdHMuZGlyZWN0aXZlcycsIFtdKVxuICAuZGlyZWN0aXZlKCdhcHBWZXJzaW9uJywgWyd2ZXJzaW9uJywgZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycykge1xuICAgICAgZWxtLnRleHQodmVyc2lvbik7XG4gICAgfTtcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcbiBcbiBcbmFuZ3VsYXIubW9kdWxlKCdsaXZlYm90cy5maWx0ZXJzJywgW10pLlxuICBmaWx0ZXIoJ2ludGVycG9sYXRlJywgWyd2ZXJzaW9uJywgZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICByZXR1cm4gU3RyaW5nKHRleHQpLnJlcGxhY2UoL1xcJVZFUlNJT05cXCUvbWcsIHZlcnNpb24pO1xuICAgIH1cbiAgfV0pOyIsInZhciBwcm9jZXNzPXJlcXVpcmUoXCJfX2Jyb3dzZXJpZnlfcHJvY2Vzc1wiKTt1cmxfcHJlZml4ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwOi8vYXBpLmxpdmVib3RzLmNjLycgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwLyc7XG4gXG5yZXF1aXJlKCcuL2FwcC5qcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycycpO1xucmVxdWlyZSgnLi9kaXJlY3RpdmVzLmpzJyk7XG5yZXF1aXJlKCcuL2ZpbHRlcnMuanMnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMuanMnKTsiLCIndXNlIHN0cmljdCc7XG4gXG52YXIgbGl2ZWJvdHNTZXJ2aWNlcyA9IGFuZ3VsYXIubW9kdWxlKCdsaXZlYm90cy5zZXJ2aWNlcycsIFsnbmdSZXNvdXJjZSddKTtcbiBcbmxpdmVib3RzU2VydmljZXNcbiAgLmZhY3RvcnkoJ0JvdHMnLCBmdW5jdGlvbigkcmVzb3VyY2UpIHtcbiAgICByZXR1cm4gJHJlc291cmNlKHVybF9wcmVmaXggKyAnYm90cycsIHtcbiAgICAgIHF1ZXJ5OiB7bWV0aG9kOiAnR0VUJ31cbiAgICB9KTtcbiAgfSk7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGlmIChldi5zb3VyY2UgPT09IHdpbmRvdyAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iXX0=
