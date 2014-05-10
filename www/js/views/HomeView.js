app.views.HomeView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    events: {
        "click #start":    "start",
        "click #quit":     "quit"
    },

    start: function () {
        app.router.navigate("questions/1", {trigger: true});
    },

    quit: function () {
        navigator.app.exitApp();
    }

});