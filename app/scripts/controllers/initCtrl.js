'use strict';


app.controller('initCtrl', function($scope, $rootScope, $location,deviceService) {
  $scope.deviceService= deviceService;
  
  //we save this variable in the rootScope in order to use
  $rootScope.isDevice = $scope.deviceService.isDevice();
  var promise = $scope.deviceService.whenDeviceReady();
    promise.then(function(){
      //******************************
      //****** Initialization*********
      //******************************
      //
      // do what ever you need like go to local files / 
      // fetch data / use GPS / user camera / etc.
      // 
      // then go to the first page
      // 
      $location.path("/one");
    },function(){

    })

});