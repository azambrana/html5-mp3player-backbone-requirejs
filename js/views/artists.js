define(
    [
        'backbone',
        'underscore',
        'collections/artists',
        'vendor/text!../../templates/artists.html',
    ],

    function (Backbone, _, artists, artistsTpl) {

        var ArtistsView = Backbone.View.extend({

            title: "Artists",
            el: "#artists-page",

            isRendered: false,

            render: function () {

                this.$el.html(_.template(artistsTpl, { title: this.title, artists: artists }));
                this.isRendered = true;

                return this;
            },

            hide: function () {
                this.$el.hide();
            },

            show: function () {
                this.$el.show();
            }
        });

        return ArtistsView;
    });