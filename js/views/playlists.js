define(
    [
        'backbone',
        'underscore',
        'collections/playlists',
        'vendor/text!templates/playlists.html',
        'vendor/text!templates/playlist.html'
    ],

    function (Backbone, _, playlists, playlistsTpl, playlistTpl) {

        var PlaylistsView = Backbone.View.extend({

            title: "Playlists",

            el: "#playlists-page",

            isRendered: false,

            initialize: function () {},

            render: function () {

                var self = this;

                this.$el.html(_.template(playlistsTpl, { title: this.title }));

                var $playlist = this.$('.playlists');

                var $html = ""
                playlists.each(function (playlist) {
                    $html += self.preparePlaylist(playlist);
                });

                $playlist.html($html);

                this.isRendered = true;

                return this;
            },

            preparePlaylist: function(playlist) {
                return _.template(playlistTpl, { playlist: playlist });
            },

            hide: function () {
                this.$el.hide();
            },

            show: function () {
                this.$el.show();
            },
        });

        return PlaylistsView;
    });