'use strict';
 
var livebotsServices = angular.module('livebots.services', ['ngResource']);
 
livebotsServices
  .factory('Bots', function($resource) {
    return $resource(url_prefix + 'bots', {
      query: {method: 'GET'}
    });
  });