var React = require('react');

var CommentStore = require('../stores/comment-store');
var CommentActionCreators = require('../actions/comment-action-creators');


var CommentText = require('../views/comment-text');
var CommentImg = require('../views/comment-img');

function getStateFromStore() {
    return {
        state: CommentStore.getAll()
    }
}

var Comments = React.createClass({

    onChange: function () {
        debugger;
        this.setState(getStateFromStore());
    },

    getInitialState: function () {
        var data = [
            {id: 123, type: "Text"},
            {id: 123, type: "Img"}
        ]
        CommentActionCreators.reFlashData(data);
        return getStateFromStore();
    },

    componentDidMount: function () {
        CommentStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function () {
        CommentStore.removeChangeListener(this.onChange);
    },


    render: function () {
        debugger;
        var itemJsx, type = "", list = [];
        for (var i in this.state.state) {
            switch (this.state.state[i].type) {
                case "Text":
                    itemJsx = <CommentText/>;
                    break;
                case "Img":
                    itemJsx = <CommentImg/>;
                    break;

            }
            list.push(itemJsx);
        }


        return (
            <div className='content pure-u-1 pure-u-md-3-4'>
                {list}
            </div>

        )
    },
    deleteItem: function (e) {
        debugger;
        //CommentAction.deleteCommentItem(1);
    },
});

module.exports = Comments;