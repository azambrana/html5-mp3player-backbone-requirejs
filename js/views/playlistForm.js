define(
    [
        'backbone',
        'underscore',
        'collections/files',
        'collections/playlists',
        'vendor/text!templates/playlistForm.html'
    ],

    function (Backbone, _, files, playlists, playlistFormTpl) {

        var PlaylistFormView = Backbone.View.extend({

            title: "New Playlist",

            events: {
                "click #createPlaylist": "createPlaylist"
            },

            render: function () {

                this.$el.html(_.template(playlistFormTpl, { title: this.title, files: files }));

                return this;
            },

            /**
             * Creates a playlist with the values of the form, this model is being added to the collection
             */
            createPlaylist: function () {

                var ids = [];
                var mp3Selected = this.$('[name="mp3File"]:checked');

                _.each(mp3Selected, function (item) {
                    ids.push(parseInt($(item).val()));
                });

                playlists.create({ id: playlists.size() + 1, title: this.$('[name="name"]').val(), files: ids});
                this.clear();
            },

            hide: function () {
                this.$el.hide();
            },

            show: function () {
                this.$el.show();
            },

            clear: function () {
                this.$('[name="name"]').val('');
                this.$(':checked').attr('checked', false);
            }
        });

        return PlaylistFormView;
    });