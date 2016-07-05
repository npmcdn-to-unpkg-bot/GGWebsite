var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentFeatureLayerItem = require('../views/comment-featurelayer-item');
var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
    return {
        num: ""
    }
}
var CommentBasemap = React.createClass({
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
            itemList.push(<CommentFeatureLayerItem/>);
        }

        return (
            <div id='Featurelayer' className='container Featurelayer panel panel-info'>
                <div className='row'>
                    <div className='col-xs-12 col-md-12'>
                        <div className='panel-body'>
                            <h5>服务地址:</h5>
                            <div className='input-group'>
                                <span className='input-group-addon' id='basic-addon1'>url:</span>
                                <input type='text' className='form-control'
                                       placeholder='http://192.168.0.191:8090/iserver/services/map-instance/rest/maps/DY25/tileImage.png?transparent=true&cacheEnabled=false&width=256&height=256&x={x}&y={y}&scale={sm}&redirect=false'
                                       aria-describedby='basic-addon1'/>
                            </div>
                            <h5>工作区:</h5>
                            <div className='input-group'>
                                <span className='input-group-addon' id='basic-addon1'>NameSpace:</span>
                                <input type='text' className='form-control'
                                       placeholder='xcaj'
                                       aria-describedby='basic-addon1'/>
                            </div>
                            <h5>工作区URI:</h5>
                            <div className='input-group'>
                                <span className='input-group-addon' id='basic-addon1'>NetWorkURI:</span>
                                <input type='text' className='form-control'
                                       placeholder='gis'
                                       aria-describedby='basic-addon1'/>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-default" onClick={this.changeState}>下一步</button>
                    {itemList}
                </div>
            </div>


        );
    },
    changeState: function (e) {
        var options = {state: "WIDGETS"}
        CommentActionCreators.stateChange(options);
    },
    addItem: function (e) {
        debugger;
        CommentActionCreators.addFeatureLayerItem();
    }
});

module.exports = CommentBasemap;