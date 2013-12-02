define(
    [
        'backbone',
        'underscore',
        'collections/playlists',
        'views/playlistForm',
        'vendor/text!templates/playlists.html',
        'vendor/text!templates/playlist.html'
    ],

    function (Backbone, _, playlists, PlaylistForm, playlistsTpl, playlistTpl) {

        var PlaylistsView = Backbone.View.extend({

            title: "Playlists",

            el: "#playlists-page",

            isRendered: false,

            playlistForm: null,

            initialize: function () {
                this.playlistForm = new PlaylistForm();
                playlists.on('add', this.addNewPlayList, this);
            },

            render: function () {

                var self = this;

                this.$el.html(_.template(playlistsTpl, { title: this.title }));

                var $playlist = this.$('.playlists');

                var $html = ""
                playlists.each(function (playlist) {
                    $html += self.preparePlaylist(playlist);
                });

                $playlist.html($html);

                this.playlistForm.setElement(this.$('#newPlayListContainer')).render();

                this.isRendered = true;

                return this;
            },

            preparePlaylist: function(playlist) {
                return _.template(playlistTpl, { playlist: playlist });
            },

            addNewPlayList: function (playlist) {
                this.$('.playlists').append(this.preparePlaylist(playlist));
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