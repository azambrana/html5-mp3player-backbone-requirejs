define(
    [
        'backbone',
        'models/album'
    ],

    function (Backbone, Album) {

        var Albums = Backbone.Collection.extend({
            model: Album,
        });

        return Albums;
    }
);