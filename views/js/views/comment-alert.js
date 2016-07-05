var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentAlert = React.createClass({
    componentDidMount: function () {
        debugger;
        setTimeout(this.click,1000);
    },
    render: function () {
        return (
            <div className="alert alert-success fade in close  col-xs-12" onClick={this.click}  id='alert-success' role="alert">suecceed</div>
        );
    },
    click:function(e){
        CommentActionCreators.alertChange("close");
    }
});

module.exports = CommentAlert;