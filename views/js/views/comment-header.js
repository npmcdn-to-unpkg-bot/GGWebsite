var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
    return {
        userData: ""
    }
}
var CommentHeader = React.createClass({
    getInitialState: function () {
        debugger;
        return getStateFromStore();
    },
    render: function () {
        return (
            <div className='sidebar pure-u-1 pure-u-md-1-4'>
                <div className='header'>
                    <h1 className='brand-title'>A Sample Blog</h1>
                    <h2 className='brand-tagline'>Creating a blog layout using Pure</h2>

                    <nav className='nav'>
                        <ul className='nav-list'>
                            <li className='nav-item'>
                                <a className='pure-button' href='http://purecss.io'>Pure</a>
                            </li>
                            <li className='nav-item'>
                                <a className='pure-button' href='http://yuilibrary.com'>YUI Library</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        );
    },
    onChange: function () {
        this.setState(getStateFromStore());
    },
    componentDidMount: function () {
        CommentStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        CommentStore.removeChangeListener(this.onChange);
    },
    onSubmit: function (e) {
        CommentActionCreators
    },
    login: function (e) {
        $('#comment-login').modal({
            keyboard: false
        })
    }
});

module.exports = CommentHeader;