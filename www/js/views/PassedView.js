app.views.PassedView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    events: {
        "click #send": "send",
        "click #quit": "quit"
    },

    send: function () {
        alert("Your result has been sent to Aaron. He will be your good friend until the end of the world!");
        console.log("quit");
    },

    quit: function () {
        alert("quit");
    }
});