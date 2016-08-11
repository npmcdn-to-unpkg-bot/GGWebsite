var CommentRouter = require('../libs/director').Router;
var CommentActionCreators = require('../actions/comment-action-creators');

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
        var data = {start: 0, end: 5};
        CommentActionCreators.reFlashData(data);
    },
    '/page/:num': function (num) {
        $('html, body,#app').animate({scrollTop: 0}, 'slow');
        num = Number(num);
        var data = {start: (num - 1) * 5};
        CommentActionCreators.reFlashData(data);
    }
});


module.exports = router;