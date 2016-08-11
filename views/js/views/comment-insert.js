var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var article = {};
var CommentInsert = React.createClass({
    render: function () {
        return (
            <div className='posts'>
                <h1 className='content-subhead'>发布文章</h1>
                <div className='pure-form pure-form-stacked'>
                    <fieldset>
                        <label>标题</label>
                        <input id='content-title' onChange={this.titleChange} placeholder='标题' required/>
                        <select id='class' onChange={this.classChange}>
                            <option id='1' data='1'>日常</option>
                            <option id='2' data='2'>技术</option>
                            <option id='3' data='3'>摄影</option>
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
    }, classChange:function(e){
        article.class = e.target.selectedOptions[0].id;
    }, submit: function (e) {
        CommentActionCreators.insertArticle(article);
    }
});

module.exports = CommentInsert;