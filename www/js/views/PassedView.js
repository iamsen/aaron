app.views.PassedImgView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    events: {
        "click #next": "next"
    },

    next: function () {
        app.router.navigate("passed", {trigger: true});
    }
});

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
        if(!$("#name").val()){
            alert("Please enter your name...");
            return;
        }
        sendMail();
        console.log("quit");
    },

    quit: function () {
        alert("quit");
    }
});


function sendMail() {
    var link = "mailto:sensisapp@gmail.com?"
            + "subject=" + escape("Aaron Result")
            + "&body=" + escape(document.getElementById('name').value)
            + " just passed the Aaron test. How much he/she likes Aaron: "
            + escape(document.getElementById('degree').value)
        ;
    window.location.href = link;
}