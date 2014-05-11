app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "": "home",
        "questions/:num": "questions",
        "failed": "failed",
        "passedImg": "passedImg",
        "passed": "passed"
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));

    },

    home: function () {
        this.renderCurrentPage(new app.views.HomeView());
    },

    questions: function () {
        this.renderCurrentPage(new app.views.QuestionsView());
    },

    passedImg: function () {
        this.renderCurrentPage(new app.views.PassedImgView());
    },

    passed: function () {
        this.renderCurrentPage(new app.views.PassedView());
    },

    failed: function () {
        this.renderCurrentPage(new app.views.FailedView());
    },

    renderCurrentPage: function (view) {
        if (app.currentView) {
            app.currentView.close();
        }
        app.currentView = view;
        app.slider.slidePage(view.render().$el);
    }

});
