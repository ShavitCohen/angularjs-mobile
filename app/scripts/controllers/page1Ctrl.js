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
  
  $scope.clientLang ="";

  $scope.deviceService.getClientLang().
    then(function(lang){
      $scope.content = "the client language is: " + lang;
    });

  
  
  $scope.p = "Page 1 paragraph";

});