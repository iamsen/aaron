var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "QuestionsView", "FailedView", "PassedView", "PassedImgView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
});

Backbone.View.prototype.close = function () {
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.undelegateEvents();
    this.$el.removeData().unbind();
    this.remove();
    this.unbind();
    Backbone.View.prototype.remove.call(this);
};

FastClick.attach(document.body);

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    if (navigator.notification) { // Override default HTML alert with native dialog
        window.alert = function (message) {
            navigator.notification.alert(
                message,    // message
                null,       // callback
                "Aaron Test", // title
                'OK'        // buttonName
            );
        };
    }

    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("pause", onPause, false);
}

function onBackKeyDown() {

}

function onPause() {
    navigator.app.exitApp();
}