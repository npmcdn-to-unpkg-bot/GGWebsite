var React = require('react');

var CommentStore = require('../stores/comment-store');
var CommentActionCreators = require('../actions/comment-action-creators');

var CommentAlert = require('../views/comment-alert');
var CommentText = require('../views/comment-text');
var CommentImg = require('../views/comment-img');
var CommentLogin = require('../views/comment-login');
var CommentRegister = require('../views/comment-register');
var CommentInsert = require('../views/comment-insert');
var CommentsTextView = require('../views/comment-text-view');

function getStateFromStore() {
    return {
        state: CommentStore.getAll()
    }
}

var Comments = React.createClass({

    onChange: function () {
        debugger;
        this.setState(getStateFromStore());
    },

    getInitialState: function () {
        //alert($.getUrlParam("name"));
        //var data = {start: 0, end: 5};
        //CommentActionCreators.reFlashData(data);
        return getStateFromStore();
    },

    componentDidMount: function () {
        CommentStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function () {
        CommentStore.removeChangeListener(this.onChange);
    },


    render: function () {
        debugger;
        var itemJsx, type = "", list = [];
        //var imgList = [
        //    {title: '就是测试', url: 'http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg'},
        //    {title: '就是测试', url: 'http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg'}
        //];
        for (var i in this.state.state) {
            switch (this.state.state[i].type) {
                case "Text":
                    itemJsx = <CommentText id={this.state.state[i].id}
                                           title={this.state.state[i].title}
                                           time={this.state.state[i].time}
                                           sort={this.state.state[i].sort}
                                           author='Jack'
                                           text={this.state.state[i].summary}/>;
                    break;
                case "Img":
                    itemJsx = <CommentImg list={this.state.state[i].list}
                                          title='近期分享照片'
                                          author='Jack'/>;
                    break;
                case "Login":
                    itemJsx = <CommentLogin/>;
                    break;
                case "Register":
                    itemJsx = <CommentRegister/>;
                    break;
                case "Alert":
                    itemJsx = <CommentAlert text={this.state.state[i].text}/>;
                    break;
                case "Insert":
                    itemJsx = <CommentInsert/>;
                    break;
                case "Article":
                    itemJsx = <CommentsTextView id={this.state.state[i].id}
                                                content={this.state.state[i].content}/>;
                    break;

            }
            list.push(itemJsx);
        }


        return (
            <div className='content pure-u-1 pure-u-md-3-4'>
                {list}
            </div>

        )
    },
    deleteItem: function (e) {
        debugger;
        //CommentAction.deleteCommentItem(1);
    },
});

module.exports = Comments;