define(
    [
        'backbone',
        'models/file',
        'localstorage'
    ],

    function (Backbone, MP3File) {

        var MP3Files = Backbone.Collection.extend({
            model: MP3File,
            localStorage: new Backbone.LocalStorage('files')
        });

        return new MP3Files();
    }
);