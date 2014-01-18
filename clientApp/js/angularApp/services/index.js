'use strict';
 
var livebotsServices = angular.module('livebots.services', ['ngResource']);
 
livebotsServices
  .factory('BotFactory', function($resource) {
    return $resource('/bot/:botId', null, {
    	'getAll': {method: 'GET', isArray:true}
    });
  });