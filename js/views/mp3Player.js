define(
    [
        'backbone',
        'underscore',
        'vendor/text!../../templates/mp3Player.html',
    ],

    function (Backbone, _, mp3PlayerTpl) {

        var MP3Player = Backbone.View.extend({

            el: "#mp3-player-container",
            mp3Source: "#mp3Source",
            relPath: "mp3/",

            isRendered: false,

            events: {
                "click #play": "play",
                "click #pause": "pause",
                "click #stop": "stop"
            },

            render: function () {

                this.$el.html(_.template(mp3PlayerTpl));

                return this;
            },

            setMedia: function (mp3File) {
                var $source = this.$(this.mp3Source);
                $source.attr("src", this.relPath + mp3File).appendTo($source.parent());
            },

            play: function () {
                this.$(this.jPlayerEl).play();
            },
            pause: function () {
                this.$(this.jPlayerEl).pause();
            },
            stop: function () {
                this.$(this.jPlayerEl).stop();
            }

        });

        return new MP3Player();
    });