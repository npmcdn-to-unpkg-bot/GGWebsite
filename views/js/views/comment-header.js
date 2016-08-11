var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentStore = require('../stores/comment-store');
var CommentModal = require('../views/comment-modal');

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
//<a className='pure-button'data-remodal-target="modal" href="#">说明</a>
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
                        <a className='pure-button' href="#public" onClick={this.insertview}>发布新文章</a>
                    </li>);
                break;
            case "ARTICLEVIEW":
                button = (
                    <li className='nav-item'>
                        <a className='pure-button' href="#home">返回</a>
                    </li>);
                break;
        }
        return (
            <div className='sidebar pure-u-1 pure-u-md-1-4'>
                <div className='header'>
                    <h1 className='brand-title' onClick={this.reload}>{this.props.title}</h1>
                    <h4 className='brand-tagline'>这里没有诗,但是会走向远方!</h4>

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
    login: function (e) {
        debugger;
        CommentActionCreators.login();
    },
    register: function (e) {
        CommentActionCreators.register();
    },
    insertview: function (e) {
        CommentActionCreators.insertview();
    }
});

module.exports = CommentHeader;