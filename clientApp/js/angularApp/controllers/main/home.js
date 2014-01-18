'use strict';

livebotsController
  .controller('home', function ($scope, $http, $sce, BotFactory) {
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    BotFactory.getAll(function(response) {
      $scope.bots = response;
    });
  });
  