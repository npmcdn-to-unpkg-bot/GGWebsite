var React = require('react');

var CommentActionCreators = require('./actions/comment-action-creators');
var CommentStore = require('./stores/comment-store');

var Comments = require('./views/comments');
var CommentsTextView = require('./views/comment-text-view');
var CommentHeader = require('./views/comment-header');
var CommentFooter = require('./views/comment-footer');

var comment = null;
var commentFooter = null;
require('./../style/style.css')

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
function getStateFromStore() {
    return {
        article: CommentStore.getAll() || {},
        viewState: CommentStore.getViewState()
    }


}

var App = React.createClass({
    getInitialState: function () {
        if (getQueryString("ArticleId")) {
            var data = {
                ArticleId: getQueryString("ArticleId")
            }
            CommentActionCreators.getArticle(data);
        } else {
            var data = {start: 0, end: 5};
            CommentActionCreators.reFlashData(data);
        }
        debugger;
        return getStateFromStore() || {};
    },
    componentDidMount: function () {
        CommentStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function () {
        CommentStore.removeChangeListener(this.onChange);
    },
    onChange: function () {
        debugger;
        this.setState(getStateFromStore());
    },
    render: function () {
        debugger;
        var title = "Yes this is my Blog!";

        switch (this.state.viewState) {
            case "LISTVIEW":
                comment = (<Comments />);
                commentFooter = (<CommentFooter />);
                break;
            case "ARTICLEVIEW":
                comment = (<CommentsTextView content={this.state.article.content}></CommentsTextView>);
                title = this.state.article.title;
                commentFooter = null;
                break;
        }
        return (
            <div id='layout' className='pure-g'>
                <CommentHeader title={title}/>
                {comment}
                {commentFooter}
            </div>
        );
    }
});


React.render(<App />, document.getElementById('app'));
