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