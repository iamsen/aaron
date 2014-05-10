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
        this.renderCurrentPage(new app.views.HomeView())
    },

    questions: function () {
        this.renderCurrentPage(new app.views.QuestionsView())
    },

    passed: function () {
        this.renderCurrentPage(new app.views.PassedView())
    },

    failed: function () {
        this.renderCurrentPage(new app.views.FailedView())
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

var answersList = [2, 3, 1, 4, 3, 4, 3, 2, 5, 5];

var questionTextList = [
    "Question 1: Aaron is",
    "Question 2: Aaron was born in",
    "Question 3: Which is Aaron's favourite food?",
    "Question 4: What car does Aaron drive?",
    "Question 5: Does Aaron have any siblings?",
    "Question 6: What does Aaron's wife do for a living?",
    "Question 7: What is Aaron's last name in Chinese?",
    "Question 8: If Aaron can have a second career, what he most likely will become?",
    "Question 9: Who is his favourite co-worker?",
    "Question 10: What does Aaron like to complain about?"
];

var questionChoicesList = [
    ["Apple", "Banana", "Kiwi", "Lemon", "Orange"],
    ["San Francisco", "Hong Kong", "Vancouver", "Tahiti", "Seoul"],
    ["Sushi", "Tonkatsu", "Tom yum goong", "Gam ja tang", "Lobster roll"],
    ["BMX 325i", "Toyota camry", "Mini cooper S", "Mazada 3", "Mustang"],
    ["No", "One brother", "One sister", "One twin brother and one sister", "Two brothers"],
    ["Accountant", "Dentist", "Lawyer", "Professor", "He doesn't have a wife!"],
    ["權", "全", "關", "拳", "Can't translate into Chinese"],
    ["Artist", "Chef", "Hipster", "MMA fighter", "Billionaire"],
    ["Alex", "Ilya", "Greg", "Ryan", "Lou"],
    ["Sen", "Weather", "Money", "Job", "Everything"]
];