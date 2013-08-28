'use strict';

/**
 * the first view
 * @param  {[type]} $scope        [description]
 * @param  {[type]} $rootScope    [description]
 * @param  {[type]} $location     [description]
 * @param  {[type]} deviceService [description]
 * @return {[type]}               [description]
 */
app.controller('page1Ctrl', function($scope, $rootScope, $location,deviceService) {
  $scope.deviceService = deviceService;


  /**
   * use this function to set the direction on a div that wrap the <ng-view>
   * in order to set the direction of the CSS3 transform.
   * @param  {[type]} dir [description]
   * @return {[type]}     [description]
   */
  $scope.direction = function(dir) {
    $rootScope.direction = dir;
  }


  /**
   * use this function to move to an other location
   * @param  {[type]} path [description]
   * @return {[type]}      [description]
   */
  $scope.go = function(path) {
    $location.path(path);
  }

  $scope.header = "device: " +$scope.deviceService.isDevice();

  // we call to the getCurrentPosition as an angular
  // promise this is why we use the then()
  $scope.deviceService.getCurrentPosition().
  then(function(position){
    $scope.p = position.coords.latitude + "/" + position.coords.longitude ;
  },function(ex){  // geolocation error
    alert("fail");
  });
  

});