define([
    'relational',
    'models/artist',
    'models/album',
    'collections/artists',
    'collections/albums'
],

    function (Relational, Artist, Album, Artists, Albums) {

        var MP3File = Backbone.RelationalModel.extend({
            relations: [
                {
                    type: Backbone.HasOne,
                    key: 'artist',
                    relatedModel: Artist,
                    reverseRelation: {
                        key: 'files',
                        includeInJSON: 'id'
                    }
                },
                {
                    type: Backbone.HasOne,
                    key: 'album',
                    relatedModel: Album,
                    reverseRelation: {
                        key: 'files',
                        includeInJSON: 'id'
                    }
                }
            ]
        });

        return MP3File;
    })