var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentStore = require('../stores/comment-store');
var CommentsMessage = require('../views/comment-message');

function getStateFromStore() {
    return {
        pageState: CommentStore.getPageState(),
        currentPage: CommentStore.getCuttentPage(),
        comment: CommentStore.getAll()
    }
}
var CommentFooter = React.createClass({
    getInitialState: function () {
        debugger;
        return getStateFromStore();
    },
    render: function () {
        var mod;
        var msg = null;
        var nextHref = "#/page/" + (Number(this.state.currentPage) + 1);
        var lastHref = "#/page/" + (Number(this.state.currentPage) - 1);

        switch (this.state.pageState) {
            case "FIRSTPAGE":
                mod = (
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href={nextHref} className='pure-button down-page'><i
                                className='fa fa-chevron-right fa-lg'/></a>
                        </li>
                    </ul>);
                break;
            case "MIDDLEPAGE":
                mod = (
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href={lastHref} className='pure-button up-page'><i className='fa fa-chevron-left fa-lg'/></a>
                        </li>
                        <li className='nav-item'>
                            <a href={nextHref} className='pure-button down-page'><i
                                className='fa fa-chevron-right fa-lg'/></a>
                        </li>
                    </ul>);
                break;
            case "LASTPAGE":
                mod = (
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href={lastHref} className='pure-button up-page'><i className='fa fa-chevron-left fa-lg'/></a>
                        </li>
                    </ul>);
                break;
            case "NONEPAGE":
                mod = null;
                break;
            case "NONE":
                mod = null;
                msg = (<CommentsMessage id={this.state.comment[0].id} comments={this.state.comment[0].comments}/>);
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
                    {msg}
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