'use strict';

livebotsController
  .controller('home', function ($scope, $http) {
    
    $http.get('/bots').success(function(data) {
      console.log(data);
      $scope.bots = data;
    });

    $scope.bots = [{
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
  	}]

    // var bots = Bots.query();
    // console.log(bots);
    // $scope.bots = bots;
  });
  