app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('request', {
        url: '/request',
        controller: 'RequestCtrl',
        templateUrl: 'js/request/request.html'
    });

});

app.controller('RequestCtrl', function ($scope, User) {

  $scope.form = {
    date: [],
  };
  $scope.user = User;

    $scope.submit = function() {
      console.log("form data:", $scope.form);
    }
});
