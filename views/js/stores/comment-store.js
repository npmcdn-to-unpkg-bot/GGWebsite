var AppDispatcher = require('../dispatcher/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var comments = [];


var CommentStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function (callback) {
        this.on('change', callback);
    },


    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },

    getAll: function () {
        return comments;
    }
});

AppDispatcher.register(function (action) {
    debugger;
    switch (action.actionType) {
        case "REFLASH":
            for (var i in action.comment)
                comments.push(action.comment[i]);
            CommentStore.emitChange();
            break;

        default:
            break;
    }
});

module.exports = CommentStore;