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
          homeCtrl.albumList = homeCtrl.searchResults.albums.items;
          homeCtrl.artistList = homeCtrl.searchResults.artists.items;
          console.log(homeCtrl.searchResults);
        });
      } else {
        homeCtrl.searchResults = null;
      }
    };
  }

})();
