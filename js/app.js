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
  .when('/:products', {
    templateUrl: '../partials/products.html',
    controller: 'myCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
}])

app.controller ('myCtrl', ['$scope', '$http', 'ngCart', '$routeParams', function($scope, $http, ngCart, $routeParams) {
    ngCart.setTaxRate(13.0);
    ngCart.setShipping(2.99);
    $scope.itemsPage = $routeParams.products
    $scope.cart = $routeParams.cart;
    $scope.whichItem = $routeParams.itemId;
    $scope.products = [{
      name: "Avov IPTV Box",
      image: "./images/avov-front.png",
      price: 150,
      description: "TVonline+ is our premium IPTV/OTT Android set top box. With our manufacturing business in Honk Kong, R&D business in Korea and a sales office in Toronto, Canada and Los Angeles, USA. Over the past couple of years, we have put together a dedicated team that specializes in the design production and maintenance of our hardware and middleware support for the IPTV/OTT set top boxes we manufacture. We target operators in the market who use and provide dedicated over IP-based networks (IPTV, OTT, VOD). This device comes pre-loaded with our Nova Middleware for easy convenience and deployment for the end-user. With more ram, strong processor it allows you to enhance the velocity of the set top box. The benefits of HEVC technology used in TVonline+ is that it requires smaller network bandwidth for provision of high quality video. TVonline+ comes equipped with a built-in WiFi and the ability to turn the STB into a internet hotspot."
    },
    {
      name:"Android TV Box",
      image: "./images/4.jpg",
      price: 150,
      description: "TVonline+ is our premium IPTV/OTT Android set top box. With our manufacturing business in Honk Kong, R&D business in Korea and a sales office in Toronto, Canada and Los Angeles, USA. Over the past couple of years, we have put together a dedicated team that specializes in the design production and maintenance of our hardware and middleware support for the IPTV/OTT set top boxes we manufacture. We target operators in the market who use and provide dedicated over IP-based networks (IPTV, OTT, VOD). This device comes pre-loaded with our Nova Middleware for easy convenience and deployment for the end-user. With more ram, strong processor it allows you to enhance the velocity of the set top box. The benefits of HEVC technology used in TVonline+ is that it requires smaller network bandwidth for provision of high quality video. TVonline+ comes equipped with a built-in WiFi and the ability to turn the STB into a internet hotspot.",
      productInfo:{  CPU: "Rockchip RK3128t Quad Core ARM Cortex A7 1.3 GHz",
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
        Support: "2.4G Wireless"}

    },
    {
      name: "Single Month IPTV Subscription",
      image: "./images/iptv.png ",
      price: 20,
      description: "This subscription includes a huge selection of HD channels, international channels, sports channels, and also video on demand. We usually process orders within hours of it being placed. For new customers, we will send you instructions on how to configure your box to use our servers."
    }
  ];
}]);
