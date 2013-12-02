define([
    'backbone',
    'underscore',
    'views/app',
    'views/mp3Player',
    'collections/files'
],

    function (Backbone, _, appView, mp3Player, files) {

        var Router = Backbone.Router.extend({

            initialize: function () {

                Backbone.history.start();

                mp3Player.render();
            },

            routes: {
                "": 'showHome',
                "artists(/:artist)": "showArtist",
                "playlists(/:playlist)": "showPlaylist",
                "search/:keyword": "searchByKeyword",
                "search": "showSearch",
                "play/:id": "playMP3"
            },

            playMP3: function (id) {

                var mp3File = files.get(parseInt(id));

                if (mp3File.length > 0) {
                    mp3Player.setMedia(mp3File[0].get('path'));
                }
            },

            showHome: function () {
                appView.showHome();
            },

            showArtist: function (artist) {
                appView.showArtist();
            },

            showPlaylist: function (playlist) {
                appView.showPlaylist();
            },

            showSearch: function () {
                appView.showSearch();
            },

            searchByKeyword: function (keyword) {
                appView.showSearch();
                appView.searchViewIns.setKeyword(keyword);
                appView.searchViewIns.search(keyword);
            }
        });

        return Router;
    }
);