'use strict';
 
livebotsController
  .controller('BotController', function ($scope, $http, $routeParams, $sce, BotFactory) {
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    BotFactory.get({botId: $routeParams.id}, function(response) {
      console.log("FACTORY", response)
      $scope.bot = response;
    });
  });