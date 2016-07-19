var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var article = {};
var CommentInsert = React.createClass({
    render: function () {
        return (
            <div className='posts'>
                <h1 className='content-subhead'>Pinned Post</h1>
                <div className='pure-form pure-form-stacked'>
                    <fieldset>
                        <legend>堆叠式表单</legend>

                        <label>Title</label>
                        <input id='content-title' onChange={this.titleChange} placeholder='Title' required/>

                        <label>Content</label>
                        <textarea id='content'  onChange={this.contentChange} placeholder="Content"></textarea>
                        <button onClick={this.submit} className='pure-button pure-button-primary'>发布</button>
                    </fieldset>
                </div>
            </div>

        );
    },
    deleteItem: function (e) {
        debugger;
        CommentActionCreators.deleteCommentItem(this.props);
    },
    titleChange: function (e) {
        article.title = e.target.value;
    }, contentChange: function (e) {
        article.content = e.target.value;
    }, submit: function (e) {
        CommentActionCreators.insertArticle(article);
    },
});

module.exports = CommentInsert;