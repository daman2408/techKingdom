var app = angular.module("techKingdom", ['ngCart', 'ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'myCtrl'
    }).

    when('/home/:cart', {
        templateUrl: 'partials/cart.html',
        controller: 'myCtrl'
    }).

    when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'myCtrl'
    }).

    when('/:products', {
        templateUrl: 'partials/products.html',
        controller: 'myCtrl'
    }).

    when('/contact/:contactUs', {
        templateUrl: 'partials/contact.html',
        controller: 'myCtrl'
    }).

    otherwise({
        redirectTo: '/home'
    });
}])

app.controller('myCtrl', ['$scope', '$http', 'ngCart', '$routeParams', function($scope, $http, ngCart, $routeParams) {
    ngCart.setTaxRate(13.0);
    ngCart.setShipping(2.99);
    $scope.itemsPage = $routeParams.products;
    $scope.cart = $routeParams.cart;
    $scope.whichItem = $routeParams.itemId;
    $scope.contactUs = $routeParams.contactUs;
    $scope.aboutUs = $routeParams.aboutUs;

    $scope.payPalSettings = {
        paypal: {
            business: "damanvir32@gmail.com",
            item_name: "Order",
            item_number: "item_number",
            currency_code: "CAD"
        }
    };
    $scope.products = [{
        name: "Avov IPTV Box",
        image: ["images/avov-front.png", "images/Capture12.png", "images/frontrcu.png"],
        price: 150,
        description: "TVonline+ is our premium IPTV/OTT Android set top box. With our manufacturing business in Honk Kong, R&D business in Korea and a sales office in Toronto, Canada and Los Angeles, USA. Over the past couple of years, we have put together a dedicated team that specializes in the design production and maintenance of our hardware and middleware support for the IPTV/OTT set top boxes we manufacture. We target operators in the market who use and provide dedicated over IP-based networks (IPTV, OTT, VOD). This device comes pre-loaded with our Nova Middleware for easy convenience and deployment for the end-user. With more ram, strong processor it allows you to enhance the velocity of the set top box. The benefits of HEVC technology used in TVonline+ is that it requires smaller network bandwidth for provision of high quality video. TVonline+ comes equipped with a built-in WiFi and the ability to turn the STB into a internet hotspot. This unit comes with a remote control, HDMI cable, Power Supply, and an Owner's Manual.",
        info: "Please note: there will be no subscriptions, activations, TV channels or any other audio/video content provided with this unit. If you want to activate the box with a subscription that we currently offer, click here!. If you want to activate with someone else, that is fine too!"
    }, {
        name: "Android TV Box",
        image: ["images/android.png", "images/3.jpg", "images/4.jpg"],
        price: 150,
        description: "The Xgody is a digital media streamer that provides quality video and audio capture from analogue sources. This model connects to other devices through Ethernet, Wi-Fi, USB and Bluetooth interfaces and is suitable for mediating audio and video signals. Its maximum resolution of 1080p lets you enjoy clear, bright text, and visual detail. This unit comes with a remote control, HDMI cable, Power Supply, and an Owner's Manual.",
        info: "Please note: there will be no subscriptions, activations, TV channels or any other audio/video content provided with this unit. If you want to activate the box with a subscription that we currently offer, click here!. If you want to activate with someone else, that is fine too!"

    }, {
        name: "IPTV Service",
        image: ["images/iptv.png ", "https://i.ytimg.com/vi/iwzyznWz400/hqdefault.jpg", "https://upload.wikimedia.org/wikipedia/commons/5/54/IPTVnet.png"],
        price: 20,
        description: "This subscription includes a huge selection of HD channels, international channels, sports channels, and also video on demand. We usually process orders within hours of it being placed. For new customers, we will send you instructions on how to configure your box to use our servers.",
        info: "Purchase this subscription along with our AVOV IPTV BOX to take advantage of the full IPTV experience!"
    }];
}]);
