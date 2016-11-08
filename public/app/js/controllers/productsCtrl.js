// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
.controller("productsCtrl", function($scope, products, appleSrv, $state) {

		// VARIABLES
		// ============================================================
		$scope.products = products.data;
		$scope.orderid = $state.params.cartid;
		$scope.qty = 1;

		// FUNCTIONS
		// ============================================================
		$scope.addToCart = function(id, productid, qty) {
			appleSrv.addToCart(id, productid, qty)
				.then(function(response) {
					console.log(response.data);
				});
		};


});
