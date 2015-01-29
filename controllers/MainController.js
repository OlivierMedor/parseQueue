var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService) {
	$scope.postData = function() {
		parseService.postData($scope.message).then(function(res) {
			 $scope.getParseData();
			 //console.log(res)
			 
			 

		})
		
	}
	$scope.getParseData = function() {
		parseService.getData().then(function(res){
			$scope.listOrQuestions = res.data.results;
		})

	}
	$scope.getParseData();
	
	$scope.changeStatus = function(questionId) {
		parseService.updateData(questionId).then(function(res){
			// console.log($scope.question);
		// 	$scope.listOrQuestions = res.data.results;
		$scope.getParseData();
		 })

	}
	$scope.deleteItem = function(questionId){
		parseService.deleteThisData(questionId).then(function(res) {
			$scope.getParseData();
		})

	}
})