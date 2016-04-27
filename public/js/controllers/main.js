angular.module('foodController', [])

	// inject the Food service factory into our controller
	.controller('mainController', ['$scope','$http','Food', function($scope, $http, Food) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all orders and show them
		// use the service to get all the orders
		Food.get()
			.success(function(data) {
				$scope.orders = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when placing an order, send the data to the node API
		$scope.createOrder = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.order_name != undefined && $scope.formData.order_price != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Food.create($scope.formData)

					// if successful creation, call our get function to get all the new orders
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.orders = data; // assign our new list of orders
					});
			}
		};

		// DELETE ==================================================================
		// delete a order after clicking delete
		$scope.deleteOrder = function(id) {
			$scope.loading = true;

			Food.delete(id)
				// if successful creation, call our get function to get all the new orders
				.success(function(data) {
					$scope.loading = false;
					$scope.orders = data; // assign our new list of orders
				});
		};
		
		// Total ==================================================================
		// Calculate total of an order after clicking Total
		$scope.calculateTotal = function(id) {
			$scope.loading = true;

			Food.total()
				// if successful creation, call our get function to get all the new todos
				.success(function(tot) {
					console.log(tot);
					$scope.loading = false;
					$scope.total = tot; // assign our new list of todos
				});
		};
		
	}]);
