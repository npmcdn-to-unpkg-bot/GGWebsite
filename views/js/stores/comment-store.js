var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var comments = {};//列表信息
var user = {state: "LISTVIEW"};//用户信息
var currentPage = 1;//当前页码
var pageState = "FIRSTPAGE";//MIDDLEPAGE,LASTPAGE
var viewState = "LISTVIEW";//ARTICLEVIEW,VISITERVIEW
var defaultTitle = "发现光明";//默认的标题
var currentTitle = defaultTitle;//当前标题
var article_class = {
    "1": {"class": "post-category-pure", "name": "日常"},
    "2": {"class": "post-category-design", "name": "技术"},
    "3": {"class": "post-category-pure", "name": "摄影"},
    "4": {"class": "post-category-design", "name": "不知"}
}

var getLocate = function () {
    var options = {
        enableHighAccuracy: true,
        maximumAge: 1000
    };
    if (navigator.geolocation) {
        //浏览器支持geolocation
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    } else {
        //浏览器不支持geolocation
        alert('您的浏览器不支持地理位置定位');
    }
}

//成功时
function onSuccess(position) {
    //返回用户位置
    //经度
    var longitude = position.coords.longitude;
    //纬度
    var latitude = position.coords.latitude;
    //alert('当前地址的经纬度：经度' + longitude + '，纬度' + latitude);
    postData(longitude, latitude);
}
//失败时
function onError(error) {
    switch (error.code) {
        case 1:
            alert("位置服务被拒绝");
            break;
        case 2:
            alert("暂时获取不到位置信息");
            break;
        case 3:
            alert("获取信息超时");
            break;
        case 4:
            alert("未知错误");
            break;
    }
    // 这里后面可以写你的后续操作了
    //经度
    var longitude = 23.1823780000;
    //纬度
    var latitude = 113.4233310000;
    postData(longitude, latitude);
}

function postData(lon, lat) {
    var url = "/spingmvc/Locate"
    var data = {
        lat: lat,
        lng: lon,
        userid: 1
    }
    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        success: function (e) {
            //alert(e);
        }
    });
}

function getPage(data, url) {
    if (data.isLocate) {
        getLocate();
    }
    currentPage = ((data.start / 5) + 1)
    data.end = 6;
    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        error: function () {
            alert(arguments[1]);
        },
        success: function (e) {
            viewState = user.state;
            var result = []
            for (var i in e) {
                result.push(e[i]);
            }
            debugger;
            if (data.start == 0 && result.length >= 6) {
                pageState = "FIRSTPAGE";
                result.splice(0, 1);
            } else if (data.start == 0 && result.length < 6) {
                pageState = "NONEPAGE";
            } else if (result.length < 6) {
                pageState = "LASTPAGE";
            } else {
                result.pop();
                pageState = "MIDDLEPAGE";
            }


            result = result.reverse();
            comments = result;
            currentTitle = defaultTitle;
            CommentStore.emitChange();
        },
        dataType: "json"
    });
}

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

    getCurrentUser: function () {
        return user;
    },

    getViewState: function () {
        return viewState;
    },
    getAll: function () {
        return comments;
    },
    getTitle: function () {
        return currentTitle;
    },
    getArticleClass: function () {
        return article_class;
    }


});


AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case "REFLASH":
            //提交注册信息
            var url = "/spingmvc/Page"
            var data = action.comment;
            getPage.call(this, data, url);
            break;
        case "LOGIN":
            pageState = "NONEPAGE";
            currentPage = 1;
            var login = {id: 1, type: "Login"}
            comments = [login];
            CommentStore.emitChange();
            break;
        case "RESUME":
           // user = action.comment;
            viewState = "ARTICLEVIEW";
            pageState = "NONEPAGE";
            currentPage = 1;
            var resume = {id: 1, type: "Resume"}
            comments = [resume];
            CommentStore.emitChange();
            break;
        case "REGISTER":
            pageState = "NONEPAGE";
            currentPage = 1;
            //跳到注册面板
            var register = {id: 1, type: "Register"}
            comments = [register];
            CommentStore.emitChange();
            break;
        case "INSERTVIEW":
            pageState = "NONEPAGE";
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
            user = action.comment;
            viewState = action.comment.state;
            var url = "/spingmvc/Page"

            getPage.call(this, {start: 0, end: 5}, url);
            //var url = "/spingmvc/Login"
            //var data = action.comment;
            //$.ajax({
            //    type: 'POST',
            //    url: url,
            //    data: data,
            //    success: function (e) {
            //        debugger;
            //        comments = [register];
            //        CommentStore.emitChange();
            //    }
            //});

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
        case "SBMSG":
            var data = action.comment;
            var url = "/spingmvc/InsertComment"
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: function (e) {
                    currentTitle = e.article.title;
                    comments = [e.article];
                    CommentStore.emitChange();
                },
                dataType: "json"
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
                    currentTitle = e.article.title;
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