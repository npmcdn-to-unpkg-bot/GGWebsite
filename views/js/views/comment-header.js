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
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse'
                                data-target='#bs-example-navbar-collapse-2' aria-expanded="true">
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <a className='navbar-brand' href='#'>
                            首页
                        </a>

                    </div>
                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                        <ul className='nav navbar-nav'>
                            <li><a href='#Basemap'>底图配置</a></li>
                            <li><a href='#Featurelayer'>要素配置</a></li>
                            <li><a href='#FeatureInfo'>弹出窗口配置</a></li>
                            <li><a href='#Widget'>组件配置</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

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