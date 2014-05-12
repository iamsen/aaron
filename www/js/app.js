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
    ["BMX 325i", "Toyota camry", "Mini cooper S", "Mazda 3", "Mustang"],
    ["No", "One brother", "One sister", "One twin brother and one sister", "Two brothers"],
    ["Accountant", "Dentist", "Lawyer", "Professor", "He doesn't have a wife!"],
    ["權", "全", "關", "拳", "Can't translate into Chinese"],
    ["Artist", "Chef", "Hipster", "MMA fighter", "Billionaire"],
    ["Alex", "Ilya", "Greg", "Ryan", "Lou (select this)"],
    ["Sen", "Weather", "Money", "Job", "Everything"]
];

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

