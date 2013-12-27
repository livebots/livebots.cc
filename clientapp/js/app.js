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