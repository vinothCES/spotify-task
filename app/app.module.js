(function () {
  'use strict';
  angular
    .module('spotifyApp', [
      'ui.router',
      'spotify',
      'ngAudio'
    ])
    .config(homeConfig);

  homeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function homeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .when('', '/')
        .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/features/home/home.tpl.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .state('album-detail', {
        url: '/albums/:albumId',
        templateUrl: 'app/features/album/album-detail.tpl.html',
        controller: 'AlbumDetailCtrl',
        controllerAs: 'albumDetailCtrl'
      });
  }
})();
