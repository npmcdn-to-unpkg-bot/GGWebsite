var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
    return {
        pageState: CommentStore.getPageState(),
        currentPage: CommentStore.getCuttentPage()
    }
}
var CommentFooter = React.createClass({
    getInitialState: function () {
        debugger;
        return getStateFromStore();
    },
    render: function () {
        var mod;
        debugger;
        switch (this.state.pageState) {
            case "FIRSTPAGE":
                mod = (
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a className='pure-button down-page' onClick={this.downPage}>下一页</a>
                        </li>
                    </ul>);
                break;
            case "MIDDLEPAGE":
                mod = (
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a className='pure-button up-page' onClick={this.upPage}>上一页</a>
                        </li>
                        <li className='nav-item'>
                            <a className='pure-button down-page' onClick={this.downPage}>下一页</a>
                        </li>
                    </ul>);
                break;
            case "LASTPAGE":
                mod = (
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a className='pure-button up-page' onClick={this.upPage}>上一页</a>
                        </li>
                    </ul>);
                break;
            case "NONE":
                mod = null;
                break;
        }

        return (
            <div className='pure-u-1'>
                <div className='footer'>
                    <nav className='nav'>
                        {mod}
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
        this.page = this.state.currentPage;
        this.page = (this.page - 1) < 0 ? 0 : (this.page - 1);
        data = {};
        data.start = (this.page - 1) * 5;
        data.end = 5;
        data.state = "up";
        CommentStore.setCurrentPage(this.page);
        CommentActionCreators.reFlashData(data)
    },
    downPage: function () {
        this.page = this.state.currentPage;
        this.page = this.page + 1;
        data = {};
        data.start = (this.page - 1) * 5;
        data.end = 6;
        data.state = "down";
        CommentStore.setCurrentPage(this.page);
        CommentActionCreators.reFlashData(data)
    }
});

module.exports = CommentFooter;