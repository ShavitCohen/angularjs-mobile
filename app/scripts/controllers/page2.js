'use strict';


app.controller('page2Ctrl', function($scope, $rootScope, $location) {
  $scope.direction = function(dir) {
    $rootScope.direction = dir;
  }

  $scope.go = function(path) {
    $location.path(path);
  }
});