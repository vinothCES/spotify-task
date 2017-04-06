(function () {
  'use strict';
  angular
    .module('spotifyApp')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'homeService'];

  function HomeController($scope, homeService) {
    var homeCtrl = this;

    homeCtrl.placeholder = "Search for Artists or Albums";
    homeCtrl.stringLimit = 10;

    homeCtrl.search = function (keywords) {
      if (keywords) {
        homeService.search(homeCtrl.searchTxt).then(function (res) {
          homeCtrl.searchResults = res;
          if (res.albums.items.length > 0) {
            homeCtrl.albumList = res.albums.items;
          } else {
            homeCtrl.albumList = null;
          }
          if (res.artists.items.length > 0) {
            homeCtrl.artistList = res.artists.items;
          } else {
            homeCtrl.artistList = null;
          }
        });
      } else {
        homeCtrl.searchResults = null;
      }
    };
  }

})();
