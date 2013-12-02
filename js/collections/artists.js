define(
    [
        'backbone',
        'models/artist',
        'localstorage'
    ],

    function (Backbone, Artist) {

        var Artists = Backbone.Collection.extend({
            model: Artist,
            localStorage: new Backbone.LocalStorage('artists')
        });

        return new Artists();
    }
);