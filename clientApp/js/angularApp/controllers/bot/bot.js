'use strict';
 
livebotsController
  .controller('bot', function ($scope, $http, $routeParams) {
    $http.get('/bot/'+$routeParams.id).success(function(data) {
      console.log(data);
      $scope.bot = data;
    });
  	$scope.bot = {
  		id: 'bot_a',
      key: 'keeey',
  		name: 'bot_a_name',
  		commands: ['up','down','left','right'],
  		address: 'tagus',
  		description: 'bot-mai-lindo',
  		photoURL: 'pretty-picture',
  		liveFeedURL: 'such-live-stream',
  	  visible: true,
      state: true
  	}
    $scope.formData = $scope.bot;
  });