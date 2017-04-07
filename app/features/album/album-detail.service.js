(function () {
  'use strict';
  
  angular.module('spotifyApp')
    .factory('albumDetailService', albumDetailService);
  
  albumDetailService.$inject = ['Spotify'];
  
  function albumDetailService(Spotify) {
    return {
      getAlbumDetail: getAlbumDetail
    };
    
    function getAlbumDetail(albumId) {
      return Spotify.getAlbum(albumId);
    }
  }
  
})();