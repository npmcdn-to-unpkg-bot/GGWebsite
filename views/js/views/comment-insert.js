var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentStore = require('../stores/comment-store');
var article = {};
function getStateFromStore() {
    return {
        article_class: CommentStore.getArticleClass()
    }
}
var CommentInsert = React.createClass({
    getInitialState: function () {
        return getStateFromStore();
    },
    onChange: function () {
        this.setState(getStateFromStore());
    },
    render: function () {
        debugger
        var list = [];
        for (var i in this.state.article_class) {
            var item;
            if (i == "1") {
                item = ( <option id={i} data={i} selected='selected'>{this.state.article_class[i].name}</option>);
            } else {
                item = ( <option id={i} data={i}>{this.state.article_class[i].name}</option>);
            }
            list.push(item);
        }
        var select;
        return (
            <div className='posts'>
                <h1 className='content-subhead'>发布文章</h1>
                <div className='pure-form pure-form-stacked'>
                    <fieldset>
                        <label>标题</label>
                        <input id='content-title' onChange={this.titleChange} placeholder='标题' required/>
                        <select id='class' onChange={this.classChange}>
                            {list}
                        </select>
                        <label>内容</label>
                        <textarea id='content' onChange={this.contentChange} placeholder="这里是写入Markdown的格式"></textarea>
                        <button onClick={this.submit} className='pure-button pure-button-primary'>发布</button>
                    </fieldset>
                </div>
            </div>

        );
    },
    deleteItem: function (e) {
        CommentActionCreators.deleteCommentItem(this.props);
    }, titleChange: function (e) {
        article.title = e.target.value;
    }, contentChange: function (e) {
        article.content = e.target.value;
    }, classChange: function (e) {
        article.class = e.target.selectedOptions[0].id;
    }, submit: function (e) {
        article.class = article.class || "1";
        CommentActionCreators.insertArticle(article);
    }
});

module.exports = CommentInsert;