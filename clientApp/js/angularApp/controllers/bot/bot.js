'use strict';
 
livebotsController
  .controller('bot', function ($scope, $http, $routeParams, $sce) {
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
    $http.get('/bot/'+$routeParams.id).success(function(data) {
      console.log(data);
      $scope.bot = data;
    });
  });