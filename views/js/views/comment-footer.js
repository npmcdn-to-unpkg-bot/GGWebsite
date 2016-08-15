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
        var nextHref = "#/page/" + (Number(this.state.currentPage) + 1);
        var lastHref = "#/page/" + (Number(this.state.currentPage) - 1);
        debugger;
        switch (this.state.pageState) {
            case "FIRSTPAGE":
                mod = (
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href={nextHref} className='pure-button down-page'>下一页</a>
                        </li>
                    </ul>);
                break;
            case "MIDDLEPAGE":
                mod = (
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href={lastHref} className='pure-button up-page'>上一页</a>
                        </li>
                        <li className='nav-item'>
                            <a href={nextHref} className='pure-button down-page'>下一页</a>
                        </li>
                    </ul>);
                break;
            case "LASTPAGE":
                mod = (
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href={lastHref} className='pure-button up-page'>上一页</a>
                        </li>
                    </ul>);
                break;
            case "NONE":
                mod = null;
                break;
        }

        return (
            <div className='pure-u-1 footer'>
                <div className='pure-u-1 pure-u-md-1-4'>

                </div>
                <div className='pure-u-1 pure-u-md-3-4'>
                    <hr width="100%"/>
                    <div>
                        <nav className='nav'>
                            {mod}
                        </nav>
                    </div>
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
    }
});

module.exports = CommentFooter;