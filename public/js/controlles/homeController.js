app.controller('HomeController', function($http) {
    var vm = this;
    vm.name = 'John Sina';
     $http.get("/info")
    .then(function(response) {
        console.log('response', response);
        vm.data = response.data;
    });
});