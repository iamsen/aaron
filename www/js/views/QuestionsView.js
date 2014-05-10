app.views.QuestionsView = Backbone.View.extend({

    render: function () {
        var param = {};
        param.currentQuestionNum = currentQuestionNum;
        param.questionText = questionTextList[currentQuestionNum - 1];
        param.questionChoices = questionChoicesList[currentQuestionNum - 1];
        this.$el.html(this.template(param));
        return this;
    },

    events: {
        "click #next": "next"
    },

    next: function (event) {
        event.preventDefault();
        $("#next").blur();
        var selectedValue = $('input[name=choice]:checked').val();
        if (!selectedValue) {
            alert("Please select an answer.");
            return;
        }

        if (answersList[currentQuestionNum - 1] === (Number(selectedValue) + 1)) {
            numCorrectAnswers++;
        }

        currentQuestionNum++;
        if (currentQuestionNum > 10) {
            if(numCorrectAnswers == 10){
                app.router.navigate("passed" + currentQuestionNum, {trigger: true});
            }else{
                app.router.navigate("failed" + currentQuestionNum, {trigger: true});
            }
        } else {
            app.router.navigate("questions/" + currentQuestionNum, {trigger: true});
        }
    }

});
