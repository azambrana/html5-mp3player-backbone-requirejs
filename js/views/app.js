define([
    'backbone',
    'underscore',
    'views/landing-page',
    'views/search',
    'views/artists',
    'views/playlists',
    'views/mp3Player',
],

    function (Backbone, _, landingPageView, SearchView, ArtistsView, PlaylistsView, mp3Player) {

        var ApplicationView = Backbone.View.extend({

            el: "body",

            // children views
            landingPageViewIns: landingPageView,
            searchViewIns: null,
            artistsViewIns: null,
            playlistsViewIns: null,

            initialize: function(){

                this.artistsViewIns = new ArtistsView();
                this.playlistsViewIns = new PlaylistsView();
                this.searchViewIns = new SearchView();

                this.views = [
                    this.landingPageViewIns,
                    this.searchViewIns,
                    this.artistsViewIns,
                    this.playlistsViewIns
                ];
            },

            showHome: function () {
                console.log("home started");

                if ( !this.landingPageViewIns.isRendered )
                this.landingPageViewIns.render();

                this.toggleViews(this.landingPageViewIns);
            },

            showArtist: function (artist) {
                console.log("artist", artist);

                if ( !this.artistsViewIns.isRendered )
                this.artistsViewIns.render();

                this.toggleViews(this.artistsViewIns);
            },

            showPlaylist: function (playlist) {
                console.log("playlist", playlist);

                if ( !this.playlistsViewIns.isRendered )
                this.playlistsViewIns.render();

                this.toggleViews(this.playlistsViewIns);
            },

            showSearch: function () {
                console.log("search");

                if ( !this.searchViewIns.isRendered )
                this.searchViewIns.render();

                this.toggleViews(this.searchViewIns);
            },

            /**
             * Toggle views, if shows the target and hide the rest of the pages
             * @param target The target view to show
             */
            toggleViews: function (target) {
                _.each(this.views, function (v) {
                    if (v == target) {
                        if (v.show) v.show();
                    } else {
                        if (v.hide) v.hide();
                    }
                });
            }
        });

        return new ApplicationView()
    });