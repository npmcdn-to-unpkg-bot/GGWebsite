var React = require('react');

var Comments = require('./views/comments');
var CommentHeader = require('./views/comment-header');
var CommentFooter = require('./views/comment-footer');
require('./../style/style.css')


var App = React.createClass({

    render: function () {
        //$("body").css("width", $(window).width());
        return (
            <div id='layout' className='pure-g'>
                <CommentHeader />
                <Comments />
                <CommentFooter />
            </div>
        );
    }
});


React.render(<App />, document.getElementById('app'));
