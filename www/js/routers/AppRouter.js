app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "": "home",
        "questions/:num": "questions",
        "failed": "failed",
        "passed": "passed"
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));

    },

    home: function () {
        var view = new app.views.HomeView();
        this.renderCurrentPage(view)
    },

    questions: function () {
        var view = new app.views.QuestionsView();
        this.renderCurrentPage(view)
    },

    passed: function () {
        console.log("passed");
    },

    failed: function () {
        console.log("failed");
    },

    renderCurrentPage: function (view) {
        if (app.currentView) {
            app.currentView.close();
        }
        app.currentView = view;
        app.slider.slidePage(view.render().$el);
    }

});

var currentQuestionNum = 1;

var numCorrectAnswers = 0;

var answersList = [2, 3, 99, 99, 99, 99, 99, 99, 99, 99];

var questionTextList = [
    "Question 1: Aaron is",
    "Question 2: Aaron was born in",
    "Question 3: Which is Aaron's favourite food?",
    "Question 4: ?",

];

var questionChoicesList = [
    ["apple", "banana", "kiwi", "lemon", "orange"],
    ["San Francisco", "Hong Kong", "Vancouver", "Tahiti", "Seoul"]
];