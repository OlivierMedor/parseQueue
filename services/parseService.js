var app = angular.module('parseQ');

app.service('parseService', function($http){
	this.postData = function(message) {
    return $http({
        method: 'post',
        url: 'https://api.parse.com/1/classes/Question',
        data: {
        	'message': message,
        	'status': 'red'

    }
    });
  }

  this.getData = function(){
  	return $http({
        method: 'GET',
        url: 'https://api.parse.com/1/classes/Question'
    })
  }

  this.updateData = function(question){
  	return $http({
  		method: 'PUT',
  		url: 'https://api.parse.com/1/classes/Question/' + question,
  		data: {
  			status: 'yellow'
  		}
  	})
  }

   this.deleteThisData = function(itemToDelete){
		return $http({
			method: 'DELETE',
			url: 'https://api.parse.com//1/classes/Question/' + itemToDelete
		})
	}
});


