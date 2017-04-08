app.controller('MainController', function($http) {
    var vm = this;
    vm.menu = {};
    vm.menu.displayName = "Login";
    vm.menu.url = "/auth/twitter";
    vm.login = true;
    $http.get("/info")
    .then(function(response) {
        console.log('response', response);
        if( response.data) {
            vm.menu.displayName = response.data.twitter.displayName;
            vm.menu.url = "/logout";
            vm.login = false;
        }
    });
});