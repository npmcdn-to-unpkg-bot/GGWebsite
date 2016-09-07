var React = require('react');


var BlogImg = React.createClass({

    render: function () {
        debugger;
        return (
            <div className='pure-u-1 pure-u-md-1-2 padding-5px'>
                <a>
                    <img alt='Photo of someone working poolside at a resort'
                         className='pure-img-responsive'
                         src={this.props.url}/>
                </a>

                <div className='post-image-meta'>
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        );
    }
});

module.exports = BlogImg;