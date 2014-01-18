'use strict';
 
angular.module('livebots', [
  'ng',
  'ngRoute',
  'ngSanitize',
  'livebots.filters',
  'livebots.services',
  'livebots.directives',
  'livebots.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/'           , {templateUrl: 'views/home.html'        , controller: 'home'});
  $routeProvider.when('/about'      , {templateUrl: 'views/about.html'       , controller: 'about'});
  $routeProvider.when('/bot'        , {templateUrl: 'views/create.html'       , controller: 'createBot'});
  $routeProvider.when('/bot/:id'    , {templateUrl: 'views/bot/view.html'         , controller: 'BotController'});
  $routeProvider.when('/bot/:id/edit'    , {templateUrl: 'views/bot/edit.html'         , controller: 'BotController'});
  $routeProvider.when('/welcome'    , {templateUrl: 'views/account/welcome.html'  , controller: 'welcome'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);