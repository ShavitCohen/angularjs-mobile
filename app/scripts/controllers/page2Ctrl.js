'use strict';
/*
	see page1Ctrl for documentation
 */

app.controller('page2Ctrl', function($scope, $rootScope, $location) {


  $scope.direction = function(dir) {
    $rootScope.direction = dir;
  }

  $scope.go = function(path) {
    $location.path(path);
  }



  $scope.header = "Page 2";
  $scope.content = "Page 2 content";
  $scope.p = "Page 2 paragraph";
});