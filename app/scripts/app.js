'use strict';

var app = angular.module('app', []);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/one', {
    templateUrl:'views/page1.html',
    controller: 'page1Ctrl'

  })
  .when('/two', {
    templateUrl:'views/page2.html',
    controller: 'page2Ctrl'
  })
  .otherwise({
    redirectTo:'/one'
  });
});
