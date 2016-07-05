var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {
    addWidget: function (comment) {
        var action = {
            actionType: "Widget",
            comment: {}
        }

        AppDispatcher.dispatch(action);

    },
    addFeatureinfo: function (comment) {
        var action = {
            actionType: "Feature_info",
            comment: {}
        }

        AppDispatcher.dispatch(action);

    },
    addFeaturelayerItem: function (comment) {
        var action = {
            actionType: "Featurelayer_Item",
            comment: {}
        }

        AppDispatcher.dispatch(action);

    },
    addBasemapItem: function (comment) {
        debugger;
        var action = {
            actionType: "BASEMAP_ITEM",
            comment: {id: comment.id,type:comment.type}
        }

        AppDispatcher.dispatch(action);
    },
    stateChange:function(comment){
        var action = {
            actionType: "STATE_CHANGE",
            comment: {state: comment.state}
        }

        AppDispatcher.dispatch(action);
    },
    generater: function (comment) {
        var action = {
            actionType: "MARKEJSON",
            comment: {}
        }

        AppDispatcher.dispatch(action);
    }

}
