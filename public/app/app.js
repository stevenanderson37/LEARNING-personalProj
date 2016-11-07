var app = angular.module("app", ['ui.router']);

angular.module("app")
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/macbook');

  $stateProvider
    .state('homeMacBook', {
      url: "/macbook",
      templateUrl: "../views/homeMacBookView.html",
      controller: "homeMacBookCtrl"
    })
    .state('designMacBook', {
      url: "/macbook/design",
      templateUrl: "../views/designMacBookView.html",
      controller: "designMacBookCtrl"
    })
    .state('macosMacBook', {
      url: "/macbook/macos",
      templateUrl: "../views/macosMacBookView.html",
      controller: "macosMacBookCtrl"
    })
    .state('specsMacBook', {
      url: "/macbook/specs",
      templateUrl: "../views/specsMacBookView.html",
      controller: "specsMacBookCtrl"
    })
    .state('wirelessMacBook', {
      url: "/macbook/wireless",
      templateUrl: "../views/wirelessMacBookView.html",
      controller: "wirelessMacBookCtrl"
    })

})
