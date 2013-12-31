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
  .controller('createBot', function ($scope, $http) {
    $scope.submit = function() {
      var botData = this.formData;
      botData.commands = botData.commands.split(",");
      console.log(botData);

      $http({
        method: "POST",
        url: url_prefix + 'bot',
        params: botData,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function (data, status, headers, config) {
          console.log("SUCCESS", data, status);
      }).error(function (data, status, headers, config) {
          console.log("ERROR", data, status);
      });
    };
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
  .controller('about', function ($scope, $http) {
     console.log("ABOUT!");
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMveGljb21iZC9Db2RlL25vZGUvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2FwcC5qcyIsIi9Vc2Vycy94aWNvbWJkL0NvZGUvbm9kZS9saXZlYm90cy5jYy9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvYWNjb3VudC9hY2NvdW50LmpzIiwiL1VzZXJzL3hpY29tYmQvQ29kZS9ub2RlL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9hY2NvdW50L2luZGV4LmpzIiwiL1VzZXJzL3hpY29tYmQvQ29kZS9ub2RlL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9ib3QvYm90LmpzIiwiL1VzZXJzL3hpY29tYmQvQ29kZS9ub2RlL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9ib3QvY3JlYXRlQm90LmpzIiwiL1VzZXJzL3hpY29tYmQvQ29kZS9ub2RlL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9ib3QvaW5kZXguanMiLCIvVXNlcnMveGljb21iZC9Db2RlL25vZGUvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2NvbnRyb2xsZXJzL2luZGV4LmpzIiwiL1VzZXJzL3hpY29tYmQvQ29kZS9ub2RlL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9tYWluL2Fib3V0LmpzIiwiL1VzZXJzL3hpY29tYmQvQ29kZS9ub2RlL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9tYWluL2hvbWUuanMiLCIvVXNlcnMveGljb21iZC9Db2RlL25vZGUvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2NvbnRyb2xsZXJzL21haW4vaW5kZXguanMiLCIvVXNlcnMveGljb21iZC9Db2RlL25vZGUvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2RpcmVjdGl2ZXMuanMiLCIvVXNlcnMveGljb21iZC9Db2RlL25vZGUvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2ZpbHRlcnMuanMiLCIvVXNlcnMveGljb21iZC9Db2RlL25vZGUvbGl2ZWJvdHMuY2MvY2xpZW50QXBwL2pzL2xpdmVib3RzLmpzIiwiL1VzZXJzL3hpY29tYmQvQ29kZS9ub2RlL2xpdmVib3RzLmNjL2NsaWVudEFwcC9qcy9zZXJ2aWNlcy5qcyIsIi9Vc2Vycy94aWNvbWJkL0NvZGUvbm9kZS9saXZlYm90cy5jYy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbiBcbmFuZ3VsYXIubW9kdWxlKCdsaXZlYm90cycsIFtcbiAgJ25nJyxcbiAgJ25nUm91dGUnLFxuICAnbGl2ZWJvdHMuZmlsdGVycycsXG4gICdsaXZlYm90cy5zZXJ2aWNlcycsXG4gICdsaXZlYm90cy5kaXJlY3RpdmVzJyxcbiAgJ2xpdmVib3RzLmNvbnRyb2xsZXJzJ1xuXSkuXG5jb25maWcoWyckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nICAgICAgICAgICAsIHt0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL21haW4vaG9tZS5odG1sJyAgICAgICAgLCBjb250cm9sbGVyOiAnaG9tZSd9KTtcbiAgJHJvdXRlUHJvdmlkZXIud2hlbignL2Fib3V0JyAgICAgICwge3RlbXBsYXRlVXJsOiAncGFydGlhbHMvbWFpbi9hYm91dC5odG1sJyAgICAgICAsIGNvbnRyb2xsZXI6ICdhYm91dCd9KTtcbiAgJHJvdXRlUHJvdmlkZXIud2hlbignL2JvdCcgICAgICAgICwge3RlbXBsYXRlVXJsOiAncGFydGlhbHMvYm90L2NyZWF0ZS5odG1sJyAgICAgICAsIGNvbnRyb2xsZXI6ICdjcmVhdGVCb3QnfSk7XG4gICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9ib3QvOmlkJyAgICAsIHt0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2JvdC9ib3QuaHRtbCcgICAgICAgICAgLCBjb250cm9sbGVyOiAnYm90J30pO1xuICAkcm91dGVQcm92aWRlci53aGVuKCcvd2VsY29tZScgICAgLCB7dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9hY2NvdW50L3dlbGNvbWUuaHRtbCcgICwgY29udHJvbGxlcjogJ3dlbGNvbWUnfSk7XG4gICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7cmVkaXJlY3RUbzogJy8nfSk7XG59XSk7IiwiJ3VzZSBzdHJpY3QnO1xuIFxubGl2ZWJvdHNDb250cm9sbGVyXG4gIC5jb250cm9sbGVyKCdhY2NvdW50JywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICBcbiAgfSk7IiwicmVxdWlyZSgnLi9hY2NvdW50LmpzJyk7IiwiJ3VzZSBzdHJpY3QnO1xuIFxubGl2ZWJvdHNDb250cm9sbGVyXG4gIC5jb250cm9sbGVyKCdib3QnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgIFxuICB9KTsiLCIndXNlIHN0cmljdCc7XG5cbmxpdmVib3RzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignY3JlYXRlQm90JywgZnVuY3Rpb24gKCRzY29wZSwgJGh0dHApIHtcbiAgICAkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYm90RGF0YSA9IHRoaXMuZm9ybURhdGE7XG4gICAgICBib3REYXRhLmNvbW1hbmRzID0gYm90RGF0YS5jb21tYW5kcy5zcGxpdChcIixcIik7XG4gICAgICBjb25zb2xlLmxvZyhib3REYXRhKTtcblxuICAgICAgJGh0dHAoe1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IHVybF9wcmVmaXggKyAnYm90JyxcbiAgICAgICAgcGFyYW1zOiBib3REYXRhLFxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnfVxuICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1NcIiwgZGF0YSwgc3RhdHVzKTtcbiAgICAgIH0pLmVycm9yKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIiwgZGF0YSwgc3RhdHVzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pOyIsInJlcXVpcmUoJy4vYm90LmpzJyk7XG5yZXF1aXJlKCcuL2NyZWF0ZUJvdC5qcycpOyIsImxpdmVib3RzQ29udHJvbGxlciA9IGFuZ3VsYXIubW9kdWxlKCdsaXZlYm90cy5jb250cm9sbGVycycsIFtdKTtcbiBcbnJlcXVpcmUoJy4vYm90Jyk7XG5yZXF1aXJlKCcuL21haW4nKTtcbnJlcXVpcmUoJy4vYWNjb3VudCcpOyIsIid1c2Ugc3RyaWN0JztcbiBcbmxpdmVib3RzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignYWJvdXQnLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCkge1xuICAgICBjb25zb2xlLmxvZyhcIkFCT1VUIVwiKTtcbiAgfSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5saXZlYm90c0NvbnRyb2xsZXJcbiAgLmNvbnRyb2xsZXIoJ2hvbWUnLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCkge1xuICAgIFxuICAgICRodHRwLmdldCh1cmxfcHJlZml4ICsgJ2JvdHMnKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgJHNjb3BlLmJvdHMgPSBkYXRhO1xuICAgIH0pO1xuXG4gICAgLy8gdmFyIGJvdHMgPSBCb3RzLnF1ZXJ5KCk7XG4gICAgLy8gY29uc29sZS5sb2coYm90cyk7XG4gICAgLy8gJHNjb3BlLmJvdHMgPSBib3RzO1xuICB9KTtcbiAgIiwicmVxdWlyZSgnLi9ob21lLmpzJyk7XG5yZXF1aXJlKCcuL2Fib3V0LmpzJyk7IiwiJ3VzZSBzdHJpY3QnO1xuIFxuYW5ndWxhci5tb2R1bGUoJ2xpdmVib3RzLmRpcmVjdGl2ZXMnLCBbXSlcbiAgLmRpcmVjdGl2ZSgnYXBwVmVyc2lvbicsIFsndmVyc2lvbicsIGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGVsbSwgYXR0cnMpIHtcbiAgICAgIGVsbS50ZXh0KHZlcnNpb24pO1xuICAgIH07XG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XG4gXG4gXG5hbmd1bGFyLm1vZHVsZSgnbGl2ZWJvdHMuZmlsdGVycycsIFtdKS5cbiAgZmlsdGVyKCdpbnRlcnBvbGF0ZScsIFsndmVyc2lvbicsIGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odGV4dCkge1xuICAgICAgcmV0dXJuIFN0cmluZyh0ZXh0KS5yZXBsYWNlKC9cXCVWRVJTSU9OXFwlL21nLCB2ZXJzaW9uKTtcbiAgICB9XG4gIH1dKTsiLCJ2YXIgcHJvY2Vzcz1yZXF1aXJlKFwiX19icm93c2VyaWZ5X3Byb2Nlc3NcIik7dXJsX3ByZWZpeCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnaHR0cDovL2FwaS5saXZlYm90cy5jYy8nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nO1xuIFxucmVxdWlyZSgnLi9hcHAuanMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMnKTtcbnJlcXVpcmUoJy4vZGlyZWN0aXZlcy5qcycpO1xucmVxdWlyZSgnLi9maWx0ZXJzLmpzJyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzLmpzJyk7IiwiJ3VzZSBzdHJpY3QnO1xuIFxudmFyIGxpdmVib3RzU2VydmljZXMgPSBhbmd1bGFyLm1vZHVsZSgnbGl2ZWJvdHMuc2VydmljZXMnLCBbJ25nUmVzb3VyY2UnXSk7XG4gXG5saXZlYm90c1NlcnZpY2VzXG4gIC5mYWN0b3J5KCdCb3RzJywgZnVuY3Rpb24oJHJlc291cmNlKSB7XG4gICAgcmV0dXJuICRyZXNvdXJjZSh1cmxfcHJlZml4ICsgJ2JvdHMnLCB7XG4gICAgICBxdWVyeToge21ldGhvZDogJ0dFVCd9XG4gICAgfSk7XG4gIH0pOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoZXYuc291cmNlID09PSB3aW5kb3cgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIl19
