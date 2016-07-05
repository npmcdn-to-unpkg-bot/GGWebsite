var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentWidgetItem = require('../views/comment-widget-item');
var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
    return {
        num: ""
    }
}
var CommentWidget = React.createClass({
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
            itemList.push(<CommentWidgetItem/>);
        }

        return (
            <div id='Widget' className='container Basemap panel panel-success'>
                <div className='row'>
                    <div className='col-xs-12 col-md-12'>
                        <div className='panel-body'>
                            <h1>组件配置</h1>
                            <div className='input-group'>
                                <span className='input-group-addon' id='basic-addon1'>组件配置:</span>
                                <input onClick={this.addItem} type='number' step='1' className='form-control' value='2'
                                       aria-describedby='basic-addon1'/>
                            </div>
                        </div>

                    </div>
                    <button class="btn btn-default"  onClick={this.changeState}>完成配置</button>
                    {itemList}
                </div>
            </div>

        );
    },
    changeState:function(e){
        var options = {state: "END"}
        CommentActionCreators.stateChange(options);
    },
    addItem: function (e) {
        debugger;
        CommentActionCreators.addFeatureLayerItem();
    }
});

module.exports = CommentWidget;