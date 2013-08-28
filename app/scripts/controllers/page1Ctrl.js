'use strict';


app.controller('page1Ctrl', function($scope, $rootScope, $location,deviceService) {
  $scope.deviceService = deviceService;

  $scope.direction = function(dir) {
    $rootScope.direction = dir;
  }

  $scope.go = function(path) {
    $location.path(path);
  }

  $scope.header = "device: " +$scope.deviceService.isDevice();
  deviceService.getgetClientLang().
    then(function(lang){
      $scope.clientLang = lang;
    })

  
  
  $scope.content = "user language = " + $scope.clientLang;
  $scope.p = "Page 1 paragraph";

});