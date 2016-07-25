var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

    reFlashData: function (comment) {
        debugger;
        var action = {
            actionType: "REFLASH",
            comment: comment
        }

        AppDispatcher.dispatch(action);
    },
    login: function (comment) {
        debugger;
        var action = {
            actionType: "LOGIN",
            comment: comment
        }

        AppDispatcher.dispatch(action);
    },
    register: function (comment) {
        debugger;
        var action = {
            actionType: "REGISTER",
            comment: comment
        }

        AppDispatcher.dispatch(action);
    },
    submitUser: function (comment) {
        debugger;
        var action = {
            actionType: "SUBMIT",
            comment: comment
        }

        AppDispatcher.dispatch(action);
    },
    loginUser: function (comment) {
        var action = {
            actionType: "LOGINUSER",
            comment: comment
        }

        AppDispatcher.dispatch(action);
    },
    insertview: function (comment) {
        var action = {
            actionType: "INSERTVIEW",
            comment: comment
        }

        AppDispatcher.dispatch(action);
    },
    insertArticle: function (comment) {
        var action = {
            actionType: "INSERTARTICLE",
            comment: comment
        }
        AppDispatcher.dispatch(action);
    },
    getArticle: function (comment) {
        var action = {
            actionType: "GETARTICLE",
            comment: comment
        }
        AppDispatcher.dispatch(action);
    }

}
