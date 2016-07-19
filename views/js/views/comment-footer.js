var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
    return {
        userData: ""
    }
}
var CommentFooter = React.createClass({
    getInitialState: function () {
        debugger;
        this.page =1;
        return getStateFromStore();
    },
    render: function () {
        return (
            <div className='pure-u-1'>
                <div className='footer'>
                    <nav className='nav'>
                        <ul className='nav-list'>
                            <li className='nav-item'>
                                <a className='pure-button' onClick={this.upPage}>up</a>
                            </li>
                            <li className='nav-item'>
                                <a className='pure-button' onClick={this.downPage}>down</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        );
    },
    onChange: function () {
        debugger;
        this.setState(getStateFromStore());
    },
    componentDidMount: function () {
        CommentStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        CommentStore.removeChangeListener(this.onChange);
    },
    upPage: function () {
        this.page = (this.page - 1) < 0 ? 0 : (this.page - 1);
        data = {};
        data.start = (this.page - 1) * 5;
        data.end = (data.start + 5);
        CommentActionCreators.reFlashData(data)
    },
    downPage: function () {
        this.page = this.page + 1;
        data = {};
        data.start = (this.page - 1) * 5;
        data.end = (data.start + 5);
        CommentActionCreators.reFlashData(data)
    }
});

module.exports = CommentFooter;