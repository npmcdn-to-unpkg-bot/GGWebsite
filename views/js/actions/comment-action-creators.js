var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

    reFlashData: function (comment) {
        debugger;
        var action = {
            actionType: "REFLASH",
            comment: comment
        }

        AppDispatcher.dispatch(action);
    }

}
