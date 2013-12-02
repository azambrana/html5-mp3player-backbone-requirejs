define(
    [
        'backbone',
        'underscore',
        'vendor/text!../../templates/landing-page.html'
    ],

    function (Backbone, _, landingPageTpl) {

        var LandingPage = Backbone.View.extend({

            el: "#landing-page",

            isRendered: false,

            initialize: function () {
                this.$jumbotron = $('.jumbotron');
            },

            render: function () {

                this.$el.html(_.template(landingPageTpl));
                this.$jumbotron.show();

                this.isRendered = true;

                return this;
            },

            hide: function () {
                this.$el.hide();
                this.$jumbotron.hide();
            },

            show: function () {
                this.$el.show();
                this.$jumbotron.show();
            }
        });

        return new LandingPage();
    }
);