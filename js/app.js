var app = angular.module("techKingdom", ['ngCart', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/home', {
    templateUrl: '../partials/home.html',
    controller: 'myCtrl'
  })
  .when('/home/:cart', {
    templateUrl: '../partials/cart.html',
    controller: 'myCtrl'
  })
  .when('/details/:itemId', {
    templateUrl: '../partials/details.html',
    controller: 'myCtrl'
  })
  .when('/productPage/:item'), {
    templateUrl: '../partials/product-page.html',
    controller: 'myCtrl'
  }
  .otherwise({
    redirectTo: '/home'
  });
}])

app.controller ('myCtrl', ['$scope', '$http', 'ngCart', '$routeParams', function($scope, $http, ngCart, $routeParams) {
    ngCart.setTaxRate(13.0);
    ngCart.setShipping(2.99);
    $scope.productPage = $routeParams.item;
    $scope.cart = $routeParams.cart;
    $scope.whichItem = $routeParams.itemId;
    $scope.products = [{
      name: "Avov IPTV Box",
      image: "./images/avov-front.png",
      price: 150
    },
    {
      name:"Android TV Box",
      image: "./images/4.jpg",
      price: 150,
      CPU: "Rockchip RK3128t Quad Core ARM Cortex A7 1.3 GHz",
      UPC: "722696962585",
      modelNumber: "CS-918T",
      GPU: "GPU offers 3D graphic",
      ROM: "DDR3 2G",
      powerAdapter: "EU plug",
      DLNA: 'Digital Living Network Alliance',
      Wifi: "IEEE 802.11 b/g/n",
      mediaStreaming: "Home Network Media; Internet TV/Video",
      Brand: "Unbranded/Generic",
      MPN: "MHA4909350504502DR",
      MediaInputConnectivity:	"Wi-Fi; USB; Bluetooth; Ethernet, Bluetooth, Ethernet, Micro USB, USB, Wi-Fi",
      Features: "Full Web Browsing// Picture Viewing// Video Calling, Cable TV Integration, Full Web Browsing, Keyboard Controller, Picture Viewing, Social Networking, Video Calling, Video Games",
      maxResolution: "1080p",
      audio_video: "HDMI",
      OS: "Android 4.4",
      Support: "2.4G Wireless"
    },
    {
      name: "IPTV Service",
      image: "./images/iptv.png ",
      price: 20
    }
  ];
}]);
