// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
.controller("orderCtrl", function($scope, order, $state, appleSrv) {

		// VARIABLES
		// ============================================================
		$scope.order = order.data.order;
		$scope.products = order.data.products;
		$scope.id = $state.params.id;


		// FUNCTIONS
		// ============================================================
		$scope.changeQty = function(id, qty) {
			appleSrv.updateProductQty(id, qty)
				.then(function(response) {
					console.log(response.data);
				});
		};
		$scope.getOrder = function() {
			appleSrv.getUserOrder($scope.id)
				.then(function(response) {
					$scope.order = response.data.order;
					$scope.products = response.data.products;
				});
		};
		$scope.removeFromCart = function(id) {
			appleSrv.removeFromCart(id)
				.then(function(response) {
					console.log(response.data);
					$scope.getOrder();
				});
		};
		$scope.placeOrder = function(id, orderid) {
			appleSrv.placeOrder(id, orderid)
				.then(function(response) {
					console.log(response.data);
					$state.go('user');
				});
		};

});
