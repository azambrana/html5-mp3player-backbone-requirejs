define(
    [
        'backbone',
        'models/playlist',
        'localstorage'
    ],

    function (Backbone, Playlist) {

        var Playlists = Backbone.Collection.extend({
            model: Playlist,
            localStorage: new Backbone.LocalStorage('playlists')
        });

        return new Playlists();
    }
);