var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentText = React.createClass({
    render: function () {
        return (
            <div className='posts'>
                <h1 className='content-subhead'>Pinned Post</h1>
                <section className='post'>
                    <header className='post-header'>
                        <img className='post-avatar' alt='Tilo Mitra&#x27;s avatar' height='48' width='48'
                             src='img/common/tilo-avatar.png'/>
                        <h2 className='post-title'>{this.props.title}</h2>
                        <p className='post-meta'>
                            By <a onClick={this.deleteItem} className='post-author'>{this.props.author}</a> under <a
                            className='post-category post-category-design' href='#'>CSS</a> <a
                            className='post-category post-category-pure' href='#'>Pure</a>
                        </p>
                    </header>
                    <div className='post-description'>
                        <p>
                            {this.props.text}
                        </p>
                    </div>
                </section>
            </div>

        );
    }
});

module.exports = CommentText;