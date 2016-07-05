var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentItem = React.createClass({
    render: function () {
        return (
            <div className='col-xs-12 col-sm-6 col-md-4' key={this.props.id}>
                <div className='thumbnail'>
                    <img alt='100%x200' src='http://geeknizer.com/wp-content/uploads/2013/08/ultimate-dynamic-navbar.jpg'/>
                    <div className='caption'><h3>{decodeURIComponent(this.props.name)}</h3>
                        <p>{decodeURIComponent(this.props.des)}</p>
                        <p>
                            <button  href='#' className='btn btn-primary btn-sm' onClick={this.deleteItem} role='button'>使用</button>
                        </p>
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

module.exports = CommentItem;