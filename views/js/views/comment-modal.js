var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var inst = $('[data-remodal-id=modal]').remodal();
var CommentModal = React.createClass({

    render: function () {
        return (
            <div className='remodal' data-remodal-id='modal'>
                <button data-remodal-action='close' className='remodal-close'></button>
                <h1>提示</h1>
                <p>
                   完善当中.......
                </p>
                <br/>
                <button data-remodal-action='cancel' className='remodal-cancel'>关闭</button>
                <button data-remodal-action='confirm' className='remodal-confirm'>好吧,那就先这样</button>
            </div>
        );
    },
    open: function () {
        inst.open();
    },
    close: function () {
        inst.close();
    }

});

module.exports = CommentModal;