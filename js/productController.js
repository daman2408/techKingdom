app.controller("productCtrl", ["$scope", function($scope){
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
