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
    
    $http.get(url_prefix + '/bots').success(function(data) {
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
    return $resource(url_prefix + '/bots', {
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvYXBwLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2NvbnRyb2xsZXJzL2FjY291bnQvYWNjb3VudC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2xpdmVib3RzL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9hY2NvdW50L2luZGV4LmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2NvbnRyb2xsZXJzL2JvdC9ib3QuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvYm90L2NyZWF0ZUJvdC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2xpdmVib3RzL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9ib3QvaW5kZXguanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvaW5kZXguanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvbWFpbi9hYm91dC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2xpdmVib3RzL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9tYWluL2hvbWUuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvbWFpbi9pbmRleC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL2xpdmVib3RzL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9kaXJlY3RpdmVzLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvbGl2ZWJvdHMvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2ZpbHRlcnMuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvbGl2ZWJvdHMuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvc2VydmljZXMuanMiLCIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9saXZlYm90cy9saXZlYm90cy5jYy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2xpdmVib3RzJywgW1xuICAnbmcnLFxuICAnbmdSb3V0ZScsXG4gICdsaXZlYm90cy5maWx0ZXJzJyxcbiAgJ2xpdmVib3RzLnNlcnZpY2VzJyxcbiAgJ2xpdmVib3RzLmRpcmVjdGl2ZXMnLFxuICAnbGl2ZWJvdHMuY29udHJvbGxlcnMnXG5dKS5cbmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgJHJvdXRlUHJvdmlkZXIud2hlbignLycgICAgICAgICAgICwge3RlbXBsYXRlVXJsOiAncGFydGlhbHMvbWFpbi9ob21lLmh0bWwnICAgICAgICAsIGNvbnRyb2xsZXI6ICdob21lJ30pO1xuICAkcm91dGVQcm92aWRlci53aGVuKCcvYWJvdXQnICAgICAgLCB7dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9tYWluL2Fib3V0Lmh0bWwnICAgICAgICwgY29udHJvbGxlcjogJ2Fib3V0J30pO1xuICAkcm91dGVQcm92aWRlci53aGVuKCcvYm90JyAgICAgICAgLCB7dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9ib3QvY3JlYXRlLmh0bWwnICAgICAgICwgY29udHJvbGxlcjogJ2NyZWF0ZUJvdCd9KTtcbiAgJHJvdXRlUHJvdmlkZXIud2hlbignL2JvdC86aWQnICAgICwge3RlbXBsYXRlVXJsOiAncGFydGlhbHMvYm90L2JvdC5odG1sJyAgICAgICAgICAsIGNvbnRyb2xsZXI6ICdib3QnfSk7XG4gICRyb3V0ZVByb3ZpZGVyLndoZW4oJy93ZWxjb21lJyAgICAsIHt0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2FjY291bnQvd2VsY29tZS5odG1sJyAgLCBjb250cm9sbGVyOiAnd2VsY29tZSd9KTtcbiAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHtyZWRpcmVjdFRvOiAnLyd9KTtcbn1dKTsiLCIndXNlIHN0cmljdCc7XG5cbmxpdmVib3RzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignYWNjb3VudCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICBcbiAgfSk7XG4iLCJyZXF1aXJlKCcuL2FjY291bnQuanMnKTsiLCIndXNlIHN0cmljdCc7XG5cbmxpdmVib3RzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignYm90JywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgIFxuICB9KTsiLCIndXNlIHN0cmljdCc7XG5cbmxpdmVib3RzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignY3JlYXRlQm90JywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgIFxuICB9KTsiLCJyZXF1aXJlKCcuL2JvdC5qcycpO1xucmVxdWlyZSgnLi9jcmVhdGVCb3QuanMnKTsiLCJsaXZlYm90c0NvbnRyb2xsZXIgPSBhbmd1bGFyLm1vZHVsZSgnbGl2ZWJvdHMuY29udHJvbGxlcnMnLCBbXSk7XG5cbnJlcXVpcmUoJy4vYm90Jyk7XG5yZXF1aXJlKCcuL21haW4nKTtcbnJlcXVpcmUoJy4vYWNjb3VudCcpO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmxpdmVib3RzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignYWJvdXQnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgXG4gIH0pOyIsIid1c2Ugc3RyaWN0JztcblxubGl2ZWJvdHNDb250cm9sbGVyXG4gIC5jb250cm9sbGVyKCdob21lJywgZnVuY3Rpb24gKCRzY29wZSwgJGh0dHApIHtcbiAgICBcbiAgICAkaHR0cC5nZXQodXJsX3ByZWZpeCArICcvYm90cycpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAkc2NvcGUuYm90cyA9IGRhdGE7XG4gICAgfSk7XG5cbiAgICAvLyB2YXIgYm90cyA9IEJvdHMucXVlcnkoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhib3RzKTtcbiAgICAvLyAkc2NvcGUuYm90cyA9IGJvdHM7XG4gIH0pO1xuICAiLCJyZXF1aXJlKCcuL2hvbWUuanMnKTtcbnJlcXVpcmUoJy4vYWJvdXQuanMnKTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnbGl2ZWJvdHMuZGlyZWN0aXZlcycsIFtdKVxuICAuZGlyZWN0aXZlKCdhcHBWZXJzaW9uJywgWyd2ZXJzaW9uJywgZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycykge1xuICAgICAgZWxtLnRleHQodmVyc2lvbik7XG4gICAgfTtcbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcblxuXG5hbmd1bGFyLm1vZHVsZSgnbGl2ZWJvdHMuZmlsdGVycycsIFtdKS5cbiAgZmlsdGVyKCdpbnRlcnBvbGF0ZScsIFsndmVyc2lvbicsIGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odGV4dCkge1xuICAgICAgcmV0dXJuIFN0cmluZyh0ZXh0KS5yZXBsYWNlKC9cXCVWRVJTSU9OXFwlL21nLCB2ZXJzaW9uKTtcbiAgICB9XG4gIH1dKTsiLCJ2YXIgcHJvY2Vzcz1yZXF1aXJlKFwiX19icm93c2VyaWZ5X3Byb2Nlc3NcIik7dXJsX3ByZWZpeCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnaHR0cDovL2FwaS5saXZlYm90cy5jYy8nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nO1xuXG5yZXF1aXJlKCcuL2FwcC5qcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycycpO1xucmVxdWlyZSgnLi9kaXJlY3RpdmVzLmpzJyk7XG5yZXF1aXJlKCcuL2ZpbHRlcnMuanMnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMuanMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGxpdmVib3RzU2VydmljZXMgPSBhbmd1bGFyLm1vZHVsZSgnbGl2ZWJvdHMuc2VydmljZXMnLCBbJ25nUmVzb3VyY2UnXSk7XG5cbmxpdmVib3RzU2VydmljZXNcbiAgLmZhY3RvcnkoJ0JvdHMnLCBmdW5jdGlvbigkcmVzb3VyY2UpIHtcbiAgICByZXR1cm4gJHJlc291cmNlKHVybF9wcmVmaXggKyAnL2JvdHMnLCB7XG4gICAgICBxdWVyeToge21ldGhvZDogJ0dFVCd9XG4gICAgfSk7XG4gIH0pO1xuXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgaWYgKGV2LnNvdXJjZSA9PT0gd2luZG93ICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiJdfQ==
