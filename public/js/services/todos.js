angular.module('foodService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Food', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/food');
			},
			create : function(orderData) {
				return $http.post('/api/food', orderData);
			},
			delete : function(id) {
				return $http.delete('/api/food/' + id);
			},
			total : function() {
				return $http.get('/api/total');
			}
		}
	}]);
