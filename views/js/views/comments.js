var React = require('react');

var CommentStore = require('../stores/comment-store');
var CommentAction = require('../actions/comment-action-creators');
var CommentBasemap = require('../views/comment-basemap');
var CommentFeatureLayer = require('../views/comment-featureLayer');
var CommentWidget = require('../views/comment-widget');

function getStateFromStore() {
    return {
        state: CommentStore.getState()
    }
}

var Comments = React.createClass({

    onChange: function () {
        debugger;
        this.setState(getStateFromStore());
    },

    getInitialState: function () {
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
        var itemJsx;
        switch (this.state.state){
            case "BASELAYER":
                itemJsx = <CommentBasemap/>;
                break;
            case "FEATURELAYER":
                itemJsx = <CommentFeatureLayer/>;
                break;
            case "WIDGETS":
                itemJsx = <CommentWidget/>;
                break;
            case "END":
                itemJsx = <CommentWidget/>;
                break;

        }



        return (
            <div>
                {itemJsx}
            </div>

        )
    },
    deleteItem: function (e) {
        debugger;
        CommentAction.deleteCommentItem(1);
    },
});

module.exports = Comments;