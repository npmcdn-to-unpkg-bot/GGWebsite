var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentFeatureInfoItem = require('../views/comment-featureInfo-item');
var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
    return {
        num: ""
    }
}
var CommentFeatureInfo = React.createClass({
    getInitialState: function () {
        return getStateFromStore();
    },
    componentDidMount: function () {
        CommentStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function () {
        CommentStore.removeChangeListener(this.onChange);
    },
    onChange: function () {
        debugger;
        this.setState(getStateFromStore());
    },
    render: function () {
        debugger
        var itemList = [];
        for (var i = 0; i < this.state.num; i++) {
            itemList.push(<CommentFeatureInfoItem/>);
        }

        return (
            <div id='FeatureInfo' className='container Basemap panel panel-danger'>
                <div className='row'>
                    <div className='col-xs-12 col-md-12'>
                        <div className='panel-body'>
                            <h1>弹出窗口配置</h1>
                            <div className='input-group'>
                                <span className='input-group-addon' id='basic-addon1'>弹出窗口配置:</span>
                                <input onClick={this.addItem} type='number' step='1' className='form-control' value='2'
                                       aria-describedby='basic-addon1'/>
                            </div>
                        </div>

                    </div>
                    {itemList}
                </div>
            </div>




        );
    },

    addItem: function (e) {
        debugger;
        CommentActionCreators.addFeatureLayerItem();
    }
});

module.exports = CommentFeatureInfo;