var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentAlert = React.createClass({

    render: function () {
        return (
            <div id='alert'>
                <a className='alert' onClick={this.reloadData}>{this.props.text}</a>
            </div>
        );
    },
    reloadData: function () {
        data = {};
        data.start = 0;
        data.end = 5;
        CommentActionCreators.reFlashData(data);
    }
});

module.exports = CommentAlert;