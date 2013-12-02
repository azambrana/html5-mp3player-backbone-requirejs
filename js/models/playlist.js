define([
    'relational',
    'models/file',
    'collections/files'
],

    function (Relational, MP3File, MP3Files) {

        var Playlist = Backbone.RelationalModel.extend({
            relations: [
                {
                    type: Backbone.HasMany,
                    key: 'files',
                    relatedModel: MP3File,
                    //collectionType: MP3Files
                }
            ]
        });

        return Playlist;
    });