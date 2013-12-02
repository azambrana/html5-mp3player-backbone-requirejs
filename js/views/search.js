define(
    [
        'backbone',
        'underscore',
        'vendor/text!templates/search.html',
        'vendor/text!templates/results.html',
        'collections/artists',
        'collections/files'
    ],

    function (Backbone, _, searchPageTpl, resultsTpl, artists, files) {

        var SearchView = Backbone.View.extend({

            el: "#search-page",
            titleResults: 'Results',

            isRendered: false,

            initialize: function () {
            },

            events: {
                "click .btn.btn-default": "onSearch"
            },

            render: function () {

                this.$el.html(_.template(searchPageTpl));

                this.isRendered = true;

                return this;
            },

            onSearch: function (e) {

                var val = this.$('input').val();

                // this.search(val);

                Backbone.App.router.navigate('#search/' + val, {trigger: true});
            },

            /**
             * Searches by the given keyword, it refreshes the result list.
             * @param keyword Value to search
             */
            search: function(keyword){

                var results = files.filter(function (f) {
                    return f.get('title').trim().toLowerCase().indexOf(keyword) != -1;
                });

                this.createListOfResults(results);
            },

            /**
             * Creates a list of the result for the current search
             * @param results Files that match with the search criteria
             * @returns {SearchView} The instance of the view.
             */
            createListOfResults: function (results) {

                var $list = this.$('.results');

                $list.html(_.template(resultsTpl, {  title: this.titleResults, results: results}));

                return this;
            },

            setKeyword: function(keyword){
                this.$('input').val(keyword);
            },

            hide: function () {
                this.$el.hide();
            },

            show: function () {
                this.$el.show();
            }
        });

        return SearchView;
    });