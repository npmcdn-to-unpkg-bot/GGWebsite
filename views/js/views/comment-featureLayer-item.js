var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentFeatureLayerItem = React.createClass({
    render: function () {
        return (
            <div className='panel panel-default col-md-offset-1 col-xs-offset-1 col-xs-10 col-md-10'>
                <div className='panel-body'>
                    <div className=''>
                        <h5>服务地址:</h5>
                        <div className='input-group'>
                            <span className='input-group-addon' id='basic-addon1'>url:</span>
                            <input type='text' className='form-control'
                                   placeholder='http://192.168.0.191:8090/iserver/services/map-instance/rest/maps/DY25/tileImage.png?transparent=true&cacheEnabled=false&width=256&height=256&x={x}&y={y}&scale={sm}&redirect=false'
                                   aria-describedby='basic-addon1'/>
                        </div>
                    </div>
                </div>
            </div>

        );
    },
    deleteItem: function (e) {
        debugger;
        CommentActionCreators.deleteCommentItem(this.props);
    }
});

module.exports = CommentFeatureLayerItem;