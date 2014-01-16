'use strict';

livebotsController
  .controller('createBot', function ($scope, $http) {
    $scope.submit = function() {
      var botData = this.formData;
      if(botData.commands) botData.commands = botData.commands.split(",");
      console.log(botData);

      $http({
        method: "POST",
        url: '/bot',
        data: $.param(botData),
        dataType: 'json',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function (data, status, headers, config) {
          console.log("SUCCESS", data, status);
      }).error(function (data, status, headers, config) {
          console.log("ERROR", data, status);
      });
    };
  });