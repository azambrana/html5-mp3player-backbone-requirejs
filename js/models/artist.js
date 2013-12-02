define([
    'relational',
    'models/album',
    'collections/albums'
],
    function (Relational, Album, Albums) {

        var Artist = Backbone.RelationalModel.extend({
            relations: [
                {
                    type: Backbone.HasMany,
                    key: 'albums',
                    relatedModel: Album,
                    reverseRelation: {
                        key: 'artist',
                        includeInJSON: 'id'
                    }
                }
            ]
        });

        return Artist;
    }
);