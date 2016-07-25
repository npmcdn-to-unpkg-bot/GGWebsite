var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
    return {
        viewState: CommentStore.getViewState(),
        userData: ""
    }
}
//<nav className='nav'>
//    <ul className='nav-list'>
//        <li className='nav-item'>
//            <a className='pure-button' onClick={this.login}>Login</a>
//        </li>
//        <li className='nav-item'>
//            <a className='pure-button' onClick={this.register}>Register</a>
//        </li>
//        <li className='nav-item'>
//            <a className='pure-button' onClick={this.insertview}>Insert</a>
//        </li>
//    </ul>
//</nav>
var CommentHeader = React.createClass({
    getInitialState: function () {
        debugger;
        return getStateFromStore();
    },
    render: function () {
        var button = null;
        switch (this.state.viewState) {
            case "LISTVIEW":
                button = (
                    <li className='nav-item'>
                        <a className='pure-button' onClick={this.insertview}>Insert</a>
                    </li>);
                break;
            case "ARTICLEVIEW":
                button = (
                    <li className='nav-item'>
                        <a className='pure-button' onClick={this.reFlashData}>Return</a>
                    </li>);
                break;
        }
        return (
            <div className='sidebar pure-u-1 pure-u-md-1-4'>
                <div className='header'>
                    <h1 className='brand-title' onClick={this.reload}>{this.props.title}</h1>
                    <h2 className='brand-tagline'>Creating a blog create a feature</h2>

                    <nav className='nav'>
                        <ul className='nav-list'>
                            {button}
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

    reFlashData: function () {
        var data = {start: 0, end: 5};
        CommentActionCreators.reFlashData(data);
    },
    login: function (e) {
        debugger;
        CommentActionCreators.login();
    },
    register: function (e) {
        CommentActionCreators.register();
    },
    insertview: function (e) {
        CommentActionCreators.insertview();
    }, reload: function () {
        var obj = {
            start: 0,
            end: 5
        }
        CommentActionCreators.reFlashData(obj);

    }
});

module.exports = CommentHeader;