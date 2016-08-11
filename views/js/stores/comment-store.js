var AppDispatcher = require('../dispatcher/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var comments = {};
var user = {};
var currentPage = 1;
var pageState = "FIRSTPAGE";
var viewState = "LISTVIEW";


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


    getPageState: function () {
        return pageState;
    },

    getCuttentPage: function () {
        return currentPage;
    },

    setCurrentPage: function (page) {
        currentPage = page;
    },

    getViewState: function () {
        return viewState;
    },
    getAll: function () {
        return comments;
    }


});


AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case "REFLASH":
            //提交注册信息
            var url = "/spingmvc/Page"
            var data = action.comment;
            currentPage = ((data.start / 5) + 1)
            data.end = (currentPage == 1 ? 5 : 6);
            $.ajax({
                type: 'GET',
                url: url,
                data: data,
                error: function () {
                    alert(arguments[1]);
                },
                success: function (e) {
                    viewState = "LISTVIEW";
                    var result = []
                    for (var i in e) {
                        result.push(e[i]);
                    }
                    if (data.start == 0) {
                        pageState = "FIRSTPAGE";
                    } else if (result.length < 6) {
                        pageState = "LASTPAGE";
                    } else {
                        result.pop();
                        pageState = "MIDDLEPAGE";
                    }


                    result = result.reverse();
                    comments = result;
                    CommentStore.emitChange();
                },
                dataType: "json"
            });
            break;
        case "LOGIN":
            pageState = "NONE";
            currentPage = 1;
            var login = {id: 1, type: "Login"}
            comments = [login];
            CommentStore.emitChange();
            break;
        case "REGISTER":
            pageState = "NONE";
            currentPage = 1;
            //跳到注册面板
            var register = {id: 1, type: "Register"}
            comments = [register];
            CommentStore.emitChange();
            break;
        case "INSERTVIEW":
            pageState = "NONE";
            currentPage = 1;
            //跳到注册面板
            var register = {id: 1, type: "Insert"}
            comments = [register];
            CommentStore.emitChange();
            break;
        case "SUBMIT":
            //提交注册信息
            var url = "/spingmvc/Register"
            var data = action.comment;
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                error: function () {
                    var tem = {id: 1, type: "Alert", text: "出错啦"};
                    comments = [tem];
                    CommentStore.emitChange();
                },
                success: function (e) {
                    user.id = e;
                    var tem = {id: 1, type: "Alert", text: "成功"};
                    comments = [tem];
                    CommentStore.emitChange();
                }
            });

            break;
        case "LOGINUSER":
            debugger;
            var url = "/spingmvc/Login"
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
            var url = "/spingmvc/InsertBlog"
            var data = action.comment;
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: function (e) {
                    var tem = {id: 1, type: "Alert", text: "成功"};
                    comments = [tem];
                    CommentStore.emitChange();
                }
            });

            break;
        case "GETARTICLE":
            debugger;
            var url = "/spingmvc/GetBlogById"
            var data = action.comment;
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: function (e) {
                    pageState = "NONE";
                    viewState = "ARTICLEVIEW";
                    comments = [e.article];
                    CommentStore.emitChange();
                },
                dataType: "json"
            });

            break;

        default:
            break;
    }
});

module.exports = CommentStore;