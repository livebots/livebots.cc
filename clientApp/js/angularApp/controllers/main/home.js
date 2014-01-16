'use strict';

livebotsController
  .controller('home', function ($scope, $http) {
    
    $http.get('/bot').success(function(data) {
      console.log(data);
      $scope.bots = data;
    });

    // var bots = Bots.query();
    // console.log(bots);
    // $scope.bots = bots;
  });
  