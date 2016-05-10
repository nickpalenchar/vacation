app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('request', {
        url: '/request',
        controller: 'RequestCtrl',
        templateUrl: 'js/request/request.html'
    });

});

app.controller('RequestCtrl', function ($scope) {

    // Images of beautiful Fullstack people.


});
