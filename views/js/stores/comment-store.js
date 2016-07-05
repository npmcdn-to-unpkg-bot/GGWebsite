var AppDispatcher = require('../dispatcher/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var comments = [];
var alertState = "";
var userData = {};
var basemapNum = 2;
var basemapList = {};
var currentState = "BASELAYER";
var baseLayerMod;

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
    },
    getAlert: function () {
        return alertState;
    },
    getUserData: function () {
        return userData;
    },
    getBasemapList: function () {
        return basemapList;
    },
    getState: function () {
        return currentState;
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case "CREATE_COMMENT":
            $('#comment-adder').modal('hide');
            $('#bs-example-navbar-collapse-2').collapse('hide')
            window.scroll(0, 0);
            $.ajax({
                type: 'GET',
                url: encodeURI("resource/FeatureLayer.json"),
                beforeSend: function (XMLHttpRequest) {
                    XMLHttpRequest.setRequestHeader("Content-Type", "text/html;charset=utf-8");
                },
                success: function (e) {
                    debugger;
                }

            });
            CommentStore.emitChange();
            break;
        case "DELETE_ITEM":
            debugger;
            delete comments[action.comment.id];
            $.get("proxy.jsp?http://welocation.duapp.com/CardViewServer/update?id=" + action.comment.id + "&msg=1", function (result) {
                debugger;
            })
            CommentStore.emitChange();
            break;
        case "ALERT_CHANGE":
            debugger
            alertState = action.comment;
            CommentStore.emitChange();
            break;
        case "LOGIN":
            debugger
            $.get("proxy.jsp?http://welocation.duapp.com/CardViewServer/login?user=" + action.comment.user + "&pwd=" + action.comment.pwd, function (result) {
                debugger;
                result = JSON.parse(result);
                comments = result.data;
                userData = action.comment;
                userData.groupid = result.groupid;
                userData.viewid = result.viewid;

                $('#comment-login').modal('hide');
                $('#bs-example-navbar-collapse-2').collapse('hide')

                CommentStore.emitChange();
            })
            break;
        case  "BASEMAP_ITEM":
            debugger;
            basemapList[action.comment.id] = {type: action.comment.type};
            CommentStore.emitChange();
            break;
        case  "STATE_CHANGE":
            debugger;
            currentState = action.comment.state;
            CommentStore.emitChange();
        default:
    }
});

module.exports = CommentStore;