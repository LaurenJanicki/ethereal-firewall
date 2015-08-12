angular.module('followApp', ['ngRoute', 'angularMoment'])
.controller('AppCtrl', ['$scope', '$location', 'AuthFactory', function($scope, $location, AuthFactory){
  $scope.signout = function() {
    AuthFactory.signout()
    .then(function() {
      $rootScope.user = {};
      $location.path('/signin');
    });
  };
}])
.run(['$rootScope', '$location', 'AuthFactory', function($rootScope, $location, AuthFactory) {
  
  $rootScope.$on("$routeChangeStart", function(evt, next, current) {

    if (next.$$route.originalPath !== '/signup' && next.$$route.originalPath !== '/signin') {
      AuthFactory.isAuth()
      .then(function(auth) {
        if (auth) {
          $rootScope.user = auth;
        }
        else {
          $rootScope.user = {};
          $location.path('/signin')
        }
      });

    }

  });
}]);