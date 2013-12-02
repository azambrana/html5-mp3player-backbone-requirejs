// This is the main entry point for the App
define(
    [
        'routers/home',
        'utils/sync',
        'views/app'
    ],

    function (Router, SyncManager, appView) {

        var init = function () {

            SyncManager.init();

            Backbone.App = {
                router: new Router(),
                appView: appView
            };
        };

        return {
            init: init
        };
    }
);
