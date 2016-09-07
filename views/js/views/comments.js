var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var CommentStore = require('../stores/comment-store');
var CommentActionCreators = require('../actions/comment-action-creators');

var CommentAlert = require('../views/comment-alert');
var CommentText = require('../views/comment-text');
var CommentImg = require('../views/comment-img');
var CommentLogin = require('../views/comment-login');
var CommentRegister = require('../views/comment-register');
var CommentInsert = require('../views/comment-insert');
var CommentsTextView = require('../views/comment-text-view');
var CommentsResume = require('../views/comment-resume');

var Loading = require('../views/widgets/loading');

function getStateFromStore() {
    return {
        state: CommentStore.getAll()
    }
}

var Comments = React.createClass({

    onChange: function () {
        this.setState(getStateFromStore());
    },

    getInitialState: function () {
        return getStateFromStore();
    },

    componentDidMount: function () {
        debugger;
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
        if (this.state.state.length >= 2) {
            $('html, body,#app').animate({scrollTop: 0}, 'slow');
        }

        for (var i in this.state.state) {
            var key = "key-" + this.state.state[i].id;
            switch (this.state.state[i].type) {
                case "Text":
                    itemJsx = <CommentText key={key}
                                           id={this.state.state[i].id}
                                           title={this.state.state[i].title}
                                           time={this.state.state[i].time}
                                           sort={this.state.state[i].sort}
                                           click={this.state.state[i].click}
                                           commentCount={this.state.state[i].commentCount}
                                           author='Jack'
                                           text={this.state.state[i].summary}/>;
                    break;
                case "Img":
                    itemJsx = <CommentImg key={Date.now()}
                                          list={this.state.state[i].list}
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
                                                position={this.state.state[i].position}
                                                content={this.state.state[i].content}/>;
                    break;
                case "Resume":
                    itemJsx = <CommentsResume />;
                    break;

            }
            list.push(itemJsx);
        }


        return (
            <div className='content pure-u-1 pure-u-md-3-4'>
                <Loading color='#000000' height='50px' width='100%'></Loading>
                <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
                    {list}
                </ReactCSSTransitionGroup>
            </div>

        )
    },
    deleteItem: function (e) {
        debugger;
        //CommentAction.deleteCommentItem(1);
    }
});

module.exports = Comments;