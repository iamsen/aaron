app.views.FailedView = Backbone.View.extend({

    render: function () {
        var param = {};
        param.result = numCorrectAnswers + "0%";
        this.$el.html(this.template(param));
        return this;
    },

    events: {
        "click #restart": "restart",
        "click #quit": "quit"
    },

    restart: function () {
        currentQuestionNum = 1;
        numCorrectAnswers = 0;
        app.router.navigate("questions/" + currentQuestionNum, {trigger: true});
    },

    quit: function () {
        alert("quit");
    }
});