var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentBasemapItem = require('../views/comment-basemap-item');
var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
    return {

        list: CommentStore.getBasemapList()
    }
}
var CommentBasemap = React.createClass({
    getInitialState: function () {
        this.props.id = "defaultLayer";
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
        for (var i in this.state.list) {
            itemList.push(<CommentBasemapItem id={i} type={this.state.list[i].type}/>);
        }

        return (
            <div id='Basemap' className='container Basemap panel panel-primary'>
                <div className='row'>
                    <div className='col-xs-12 col-md-12'>
                        <div className='panel-body'>
                            <h1>底图配置</h1>
                            <div className='input-group'>
                                <span className='input-group-addon' id='basic-addon1'>底图名称:</span>
                                <input onChange={this.change} placeholder='defaultLayer' type='text'
                                       className='form-control'/>
                                <div className='input-group-btn'>
                                    <button type='button' className='btn btn-default dropdown-toggle'
                                            data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> 添加图层
                                        <span className='caret'></span></button>
                                    <ul className='dropdown-menu dropdown-menu-right'>
                                        <li><a href='#' id='supermap' onClick={this.addItem}>超图</a></li>
                                        <li><a href='#' id='arcgis' onClick={this.addItem}>Arcgis</a></li>
                                        <li><a href='#' id='geoserver' onClick={this.addItem}>Geoserver</a></li>
                                    </ul>
                                </div>

                            </div>


                        </div>


                    </div>
                    <div className='col-xs-6 col-md-6'>

                    </div>

                    <button class="btn btn-default"  onClick={this.changeState}>下一步</button>
                    {itemList}
                </div>
            </div>


        );
    },

    addItem: function (e) {
        debugger;
        var options = {id: this.props.id, type: e.target.id}
        CommentActionCreators.addBasemapItem(options);
    },
    changeState:function(e){
        var options = {state: "FEATURELAYER"}
        CommentActionCreators.stateChange(options);
    },
    change: function (e) {
        this.props.id = e.target.value;
    }

});

module.exports = CommentBasemap;