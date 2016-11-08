// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("userCtrl", function($scope, appleSrv) {

		// VARIABLES
		// ============================================================

		// FUNCTIONS
		// ============================================================
		$scope.getUsers = function() {
			appleSrv.getUsers()
				.then(function(response) {
					$scope.users = response.data;
				});
		};
		$scope.getUsers();


	});
