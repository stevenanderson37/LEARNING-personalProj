// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router']);

// CONFIG
// ============================================================
angular.module("app")
.config(function($stateProvider, $urlRouterProvider) {
  // ASSIGN OTHERWISE
  $urlRouterProvider.otherwise('homeMacBook');

  $stateProvider

    // MacBook HOME STATE
    .state('homeMacBook', {
      url: "/macbook",
      templateUrl: "./views/homeMacBookView.html",
      controller: "homeMacBookCtrl"
    })

    // MacBook DESIGN STATE
    .state('designMacBook', {
      url: "/macbook/design",
      templateUrl: "./app/views/designMacBookView.html",
      controller: "designMacBookCtrl"
    })

    // MacBook macOS STATE
    .state('macosMacBook', {
      url: "/macbook/macos",
      templateUrl: "./app/views/macosMacBookView.html",
      controller: "macosMacBookCtrl"
    })

    // MacBook TECH SPECS STATE
    .state('specsMacBook', {
      url: "/macbook/specs",
      templateUrl: "./app/views/specsMacBookView.html",
      controller: "specsMacBookCtrl"
    })

    // MacBook WIRELESS STATE
    .state('wirelessMacBook', {
      url: "/macbook/wireless",
      templateUrl: "./app/views/wirelessMacBookView.html",
      controller: "wirelessMacBookCtrl"
    })

    // MacBook BAG STATE
    .state('bag', {
      url: "/bag",
      templateUrl: "./app/views/bagView.html",
      controller: "bagCtrl"
    })

		// HOME STATE
		.state('user', {
			url: '/user',
			templateUrl: './app/views/userTmpl.html',
			controller: 'userCtrl'
		})


		// ORDER STATE
		.state('order', {
			url: '/order/:id',
			templateUrl: './app/views/orderTmpl.html',
			controller: 'orderCtrl',
			resolve: {
				order: function(mainService, $stateParams) {
					return mainService.getUserOrder($stateParams.id);
				}
			}
		})


		// PRODUCTS STATE
		.state('products', {
			url: '/products/:id/:cartid',
			templateUrl: './app/views/productsTmpl.html',
			controller: 'productsCtrl',
			resolve: {
				products: function(mainService, $state) {
					return mainService.getProducts();
				}
			}
		});




		// ASSIGN OTHERWISE
		// ============================================================
		// $urlRouterProvider.otherwise('user');

})
