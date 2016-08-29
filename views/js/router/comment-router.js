var CommentRouter = require('../libs/director').Router;
var CommentActionCreators = require('../actions/comment-action-creators');

var sort = "";
function SetCookie(name, value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)//取cookies函数
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;

}
function changeStyle(type) {
    if (type == "nomal") {
        $("a,p,h1,h2,h3,h4,h5").css("font-family", "'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif");
    } else if (type == "pen") {
        $("a,p,h1,h2,h3,h4,h5").css("font-family", "tt");
    }

}

var router = new CommentRouter({
    '/public': function () {
    },
    '/atricleid/:id': function (id) {
        $('html, body,#app').animate({scrollTop: 0}, 'slow');
        var data = {
            ArticleId: id
        }
        CommentActionCreators.getArticle(data);
    },
    '/home': function () {
        var style = getCookie("fontstyle");
        changeStyle(style);
        var data = {start: 0, end: 5};
        CommentActionCreators.reFlashData(data);
    },
    '/locate': function () {
        var data = {start: 0, end: 5, isLocate: true};
        CommentActionCreators.reFlashData(data);
    },
    '/visiter': function () {
        var style = getCookie("fontstyle");
        changeStyle(style);
        var data = {state: "VISITERVIEW"};
        CommentActionCreators.loginUser(data);
    },
    '/resume': function () {
        $('html, body,#app').animate({scrollTop: 0}, 'slow');
        var data = {state: "VISITERVIEW"};
        CommentActionCreators.resume(data);
    },
    '/sort/:id': function (id) {
        $('html, body,#app').animate({scrollTop: 0}, 'slow');
        num = 1;
        sort = id;
        var data = {start: (num - 1) * 5, sort: sort};
        CommentActionCreators.reFlashData(data);
    },
    '/page/:num': function (num) {
        $('html, body,#app').animate({scrollTop: 0}, 'slow');
        num = Number(num);
        var data = {start: (num - 1) * 5, sort: sort};
        CommentActionCreators.reFlashData(data);
    },
    '/fontchange/:type': function (type) {
        SetCookie("fontstyle", type);
        changeStyle(type);
        window.location.href = "#home";

    },
});


module.exports = router;