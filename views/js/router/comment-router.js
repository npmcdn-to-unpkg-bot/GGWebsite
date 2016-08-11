var CommentRouter = require('../libs/director').Router;
var CommentActionCreators = require('../actions/comment-action-creators');

var router = new CommentRouter({
    '/public': function () {
    },
    '/atricleid/:id': function (id) {
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
        num = Number(num);
        var data = {start: (num - 1) * 5, end: ((num - 1) * 5 + 5)};
        CommentActionCreators.reFlashData(data);
    }
});


module.exports = router;