'use strict';


app.controller('page1Ctrl', function($scope, $rootScope, $location,deviceService) {
  $scope.deviceService = deviceService;

  $scope.direction = function(dir) {
    $rootScope.direction = dir;
  }

  $scope.go = function(path) {
    $location.path(path);
  }
console.log($scope.deviceService.isDevice());
  $scope.header = "device: " +$scope.deviceService.isDevice();
  $scope.content = "Page 1 content";
  $scope.p = "Page 1 paragraph";

});