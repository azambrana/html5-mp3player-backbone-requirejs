define([
    'backbone',
    'underscore',
    'mockup',
    'collections/albums',
    'collections/artists',
    'collections/files',
    'collections/playlists',
],

    function (Backbone, _, mockup, albums, artists, files, playlists) {

        var LOAD_FROM_AJAX = true;
        var jsonPath = 'data/mockup.json';
        var allCollections = [artists, files, playlists];

        /**
         * Loads the data models to all collections.
         */
        var loadData = function () {

            var hasLocalData = window.localStorage.getItem('hasLocalData');

            if (!hasLocalData) {
                if (LOAD_FROM_AJAX) {
                    console.log('loading data using ajax');
                    syncData();
                } else {
                    console.log('loading mockup data');
                    processData(mockup);
                }
            } else {
                console.log('loading local data from localStorage');
                loadLocalData();
            }
        };

        /**
         * Process data, it creates the collection with the local or mockup data
         */
        var processData = function (data) {

            updateCollection(artists, data.artists);
            updateCollection(files, data.files);
            updateCollection(playlists, data.playlists);
        };

        /**
         * Loads the data models to all collections, from the sync local data.
         */
        var loadLocalData = function () {
            _.each(allCollections, function (collection) {
                collection.fetch();
            });
        };

        /**
         * Loads data from an external resource
         */
        var syncData = function () {

            var jqxhr = $.ajax({

                url: jsonPath,
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                dataType: "json",

                error: function () {
                    console.log('error loading json mockup', arguments);
                },

                success: function (data) {
                    window.localStorage.setItem('hasLocalData', true);
                    processData(data);
                }
            });
        };

        /**
         * creates/updates the collection with the models
         */
        var updateCollection = function (collection, models) {

            _.each(models, function (model) {
                collection.create(model);
            });

        };

        var SyncManager = {

            init: function () {
                loadData();
            }
        };

        return SyncManager;
    });