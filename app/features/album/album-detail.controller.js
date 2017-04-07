(function () {
  'use strict';
  
  angular.module('spotifyApp')
    .controller('AlbumDetailCtrl', AlbumDetailCtrl);
  
  AlbumDetailCtrl.$inject = ['$stateParams', 'albumDetailService', 'ngAudio'];
  
  function AlbumDetailCtrl($stateParams, albumDetailService, ngAudio) {
    var albumDetailCtrl = this,
      albumId,
      album;
    
    albumId = $stateParams.albumId;
    
    albumDetailService.getAlbumDetail(albumId).then(function (response) {
      album = response;
      console.log('Album', album);
      if(!angular.isUndefined(album)) {
        albumDetailCtrl.name = album.name;
        albumDetailCtrl.imgUrl = album.images[0].url;
        albumDetailCtrl.artist = album.artists[0].name;
        albumDetailCtrl.label = album.label;
        albumDetailCtrl.release = album.release_date;
        albumDetailCtrl.popularity = album.popularity;
        albumDetailCtrl.availability = album.available_markets.length;
        albumDetailCtrl.tracks = album.tracks.items;
      }
    }, function (error) {
      console.log('Could not find album');
    });
    
    albumDetailCtrl.onSelectTrack = function (track) {
      albumDetailCtrl.audio = ngAudio.load(track.preview_url);
      albumDetailCtrl.playBtnIcon = 'glyphicon-play';
      console.log('Audio Obj', albumDetailCtrl.audio);
    }
    
    albumDetailCtrl.handlePlay = function () {
      albumDetailCtrl.audio.paused ? albumDetailCtrl.audio.play() : albumDetailCtrl.audio.pause();
      if (albumDetailCtrl.audio) {
        if (albumDetailCtrl.audio.paused) {
          albumDetailCtrl.playBtnIcon = 'glyphicon-pause';
        } else {
          albumDetailCtrl.playBtnIcon = 'glyphicon-play';
        }
      }
    }
  }
  
})();