var React = require('react');
var Cyion = require('./loadingSVG/loading-cylon-red.svg');


var Loading = React.createClass({

    render: function () {
        //var type = this.state.delayed ? 'blank' : this.props.type;
        //var svg = svgSources[type];
        var style = {
            fill: this.props.color,
            height: this.props.height,
            width: this.props.width
        };
        debugger;
        return (
            <div id='loading' style={style}>
                <img style={style} src={Cyion} alt="Loading icon" />
            </div>
        );
    }
});

module.exports = Loading;