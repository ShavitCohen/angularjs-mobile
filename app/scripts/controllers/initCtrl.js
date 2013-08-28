'use strict';

/**
 * Init controller, it suppose to initialize the app
 * it includes a promis for the device ready.
 * 
 * @param  {[type]} $scope        [description]
 * @param  {[type]} $rootScope    [description]
 * @param  {[type]} $location     [description]
 * @param  {[type]} deviceService [description]
 * @return {[type]}               [description]
 */

app.controller('initCtrl', function($scope, $rootScope, $location,deviceService) {
  $scope.deviceService= deviceService;
  
  //we save the isDevice variable to the $rootScope in order to use it later on
  $rootScope.isDevice = $scope.deviceService.isDevice();

  var deviceReadyPromise = $scope.deviceService.whenDeviceReady();
    deviceReadyPromise.then(function(){
      $scope.deviceService.enableTapEvents();

      //******************************
      //****** Initialization*********
      //******************************
      //
      // do what ever you need for example: 
      // - use phonegap logic
      // then go to the first view
      // 
      $location.path("/one");
    })

    


});