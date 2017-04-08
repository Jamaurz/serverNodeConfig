var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "js/views/index.html",
        controller: 'HomeController',
        controllerAs: 'my'
    })
    .when("/polls", {
        templateUrl : "js/views/polls.html"
    })
    .when("/createpoll", {
        templateUrl : "js/views/createpoll.html"
    });
});