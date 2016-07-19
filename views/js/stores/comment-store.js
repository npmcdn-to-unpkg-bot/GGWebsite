var AppDispatcher = require('../dispatcher/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var comments = [];
var user = {};
var cuttentPage = 1;


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
    getCurrentPage(){
        return cuttentPage;
    }
});

var reloadContent = function(callback){
    debugger;
    var url = "http://localhost:8091/spingmvc/Page"
    var data = action.comment;
    data.start = (cuttentPage - 1) * 5;
    data.end = (data.start + 5);

    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        error: function () {
            alert(arguments[1]);
        },
        success: function (e) {
            callback(e);
        },
        dataType: "json"
    });
}

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case "REFLASH":
            //提交注册信息
            var url = "http://localhost:8091/spingmvc/Page"
            var data = action.comment;

            $.ajax({
                type: 'GET',
                url: url,
                data: data,
                error: function () {
                    alert(arguments[1]);
                },
                success: function (e) {
                    //e.fotter = {type: "Footer"};
                    comments = e;
                    CommentStore.emitChange();
                },
                dataType: "json"
            });
            break;
        case "LOGIN":
            var login = {id: 1, type: "Login"}
            comments = [login];
            CommentStore.emitChange();
            break;
        case "REGISTER":
            //跳到注册面板
            var register = {id: 1, type: "Register"}
            comments = [register];
            CommentStore.emitChange();
            break;
        case "INSERTVIEW":
            //跳到注册面板
            var register = {id: 1, type: "Insert"}
            comments = [register];
            CommentStore.emitChange();
            break;
        case "SUBMIT":
            //提交注册信息
            var url = "http://localhost:8091/spingmvc/Register"
            var data = action.comment;
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                error: function () {
                    alert(arguments[1]);
                },
                success: function (e) {
                    user.id = e;
                    var tem = {id: 1, type: "Alert"};
                    comments = [tem];
                    CommentStore.emitChange();
                }
            });

            break;
        case "LOGINUSER":
            debugger;
            var url = "http://localhost:8091/spingmvc/Login"
            var data = action.comment;
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: function (e) {
                    debugger;
                    comments = [register];
                    CommentStore.emitChange();
                }
            });

            break;
        case "INSERTARTICLE":
            debugger;
            var url = "http://localhost:8091/spingmvc/InsertBlog"
            var data = action.comment;
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: function (e) {
                    debugger;
                    comments = [register];
                    CommentStore.emitChange();
                }
            });

            break;

        default:
            break;
    }
});

module.exports = CommentStore;