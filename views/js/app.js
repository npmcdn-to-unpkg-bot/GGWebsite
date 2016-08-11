var React = require('react');


var Comments = require('./views/comments');

var CommentHeader = require('./views/comment-header');
var CommentFooter = require('./views/comment-footer');
var CommentModal = require('./views/comment-modal');
var CommentRouter = require('./router/comment-router');


require('./../style/style.css')

CommentRouter.init();
window.location.hash = window.location.hash || "home";



var App = React.createClass({

    render: function () {
        debugger;
        return (
            <div id='layout' className='pure-g'>
                <CommentHeader/>
                <Comments />
                <CommentFooter />
                <CommentModal></CommentModal>
            </div>
        );
    }
});


React.render(<App />, document.getElementById('app'));
