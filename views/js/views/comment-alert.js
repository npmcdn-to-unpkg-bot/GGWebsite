var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentAlert = React.createClass({
    componentDidMount: function () {
        debugger;
        setTimeout(this.click,1000);
    },
    render: function () {
        return (
            <div id='alert'>
                <a className='alert' href='#alert'>This is a slide down alert!</a>
            </div>
        );
    }
});

module.exports = CommentAlert;