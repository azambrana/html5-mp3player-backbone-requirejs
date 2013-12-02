// This set's up the module paths for underscore and backbone
require.config({
    "paths": {
        "urlArgs": "?cb=" + (new Date().getTime()),
        "underscore": "vendor/underscore",
        "backbone": "vendor/backbone",
        "relational": "vendor/backbone-relational",
        "localstorage": "vendor/backbone.localStorage",
        "mockup": "../data/mockup",
        "templates": "../templates"
    },
    "shim": {
        "backbone": {
            'deps': ['underscore'],
            'exports': 'Backbone'
        },
        "underscore": {
            'exports': '_'
        },
        "relational": {
            'deps': ['backbone'],
            'exports': 'relational'
        },
        "localstorage": {
            'deps': ['backbone'],
            'exports': 'backbone'
        },
    }
});

require([
    'underscore',
    'backbone',
    'app'
],
    function (_, Backbone, app) {
        app.init();
    }
);