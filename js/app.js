var app = angular.module("techKingdom", ['ngCart']);

app.controller ('myCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(13.0);
    ngCart.setShipping(2.99);
    $scope.products = [{
      name: "Avov IPTV Box",
      image: "./images/avov-front.png",
      price: 150
    },
    {
      name:"Android TV Box",
      image: "./images/4.jpg",
      price: 150,
    },
    {
      name: "IPTV Service",
      image: "./images/iptv.png ",
      price: 20
    }
  ];
}]);
