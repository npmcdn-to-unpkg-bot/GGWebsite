var React = require('react');

var Comments = require('./views/comments');
var CommentHeader = require('./views/comment-header');
require('./../style/style.css')


var App = React.createClass({

    render: function () {
        return (
            <div id='layout' className='pure-g'>
                <CommentHeader />
                <Comments />
            </div>
        );
    }
});


React.render(<App />, document.getElementById('app'));
