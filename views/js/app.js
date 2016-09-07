var React = require('react');


var Comments = require('./views/comments');

var CommentHeader = require('./views/comment-header');
var CommentFooter = require('./views/comment-footer');
var CommentModal = require('./views/comment-modal');
var CommentRouter = require('./router/comment-router');


require('./../style/style.css');
require('./../style/font-awesome.min.css');



CommentRouter.init();
window.location.hash = window.location.hash || "visiter";



var App = React.createClass({
    componentDidMount:function(){
        $("table").wrap("<div class='table-responsive'></div>");
        $("table").addClass("table table-bordered table-striped")

    },
    render: function () {
        return (
            <div id='layout' className='pure-g'>
                <CommentHeader/>
                <Comments />
                <CommentFooter />
                <CommentModal />
            </div>
        );
    }
});


React.render(<App />, document.getElementById('app'));
