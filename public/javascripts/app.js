'use strict';

/* App Module */
var ibetcha = angular.module('ibetcha', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ngCookies',
  'ngSanitize'
]);

// Configures routes with templates and controllers
// CLIENT-SIDE ROUTES:
// #/ - login page
// #/home - home page (differs for logged in users and not logged in users)
// #/roadmaps/:id - view for a single roadmap with specified id
// #/edit - edit roadmap view for Alums only 
ibetcha.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/loginPage.html',
        controller: 'LoginPageController'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomePageController'
      }).
      when('/profile/:username', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfilePageController'
      }).
      when('/invite', {
        templateUrl: 'partials/invite.html',
        controller: 'InvitePageController'
      }).
      when('/bets/:id/:type', {
        templateUrl: 'partials/betDetail.html',
        controller: 'BetDetailPageController'
      }).
      when('/checkoff/:id', {
        templateUrl: 'partials/checkoff.html',
        controller: 'CheckoffPageController'
      }).
      when('/newbet', {
        templateUrl: 'partials/newbet.html',
        controller: 'NewBetPageController'
      }).
      when('/monitorRequests', {
        templateUrl: 'partials/monitorRequests.html',
        controller: 'MonitorRequestPageController'
      }).
      when('/friendRequests', {
        templateUrl: 'partials/friendRequests.html',
        controller: 'FriendRequestPageController'
      }).
      when('/paymentRequests', {
        templateUrl:'partials/paymentRequests.html',
        controller: 'PaymentRequestPageController'
      }).
      otherwise({
        templateUrl: 'partials/loginPage.html',
        controller: 'LoginPageController'
      });
  }]);
