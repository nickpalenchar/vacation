app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: function ($scope, AuthService) {
          $scope.isLoggedIn = AuthService.isAuthenticated;
        }
    });
});
