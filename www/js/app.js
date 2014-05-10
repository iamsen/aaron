var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "QuestionsView", "FailedView", "PassedView"],
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