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
                        <h2 className='post-title'>Introducing Pure</h2>
                        <p className='post-meta'>
                            By <a href='#' className='post-author'>Tilo Mitra</a> under <a
                            className='post-category post-category-design' href='#'>CSS</a> <a
                            className='post-category post-category-pure' href='#'>Pure</a>
                        </p>
                    </header>
                    <div className='post-description'>
                        <p>
                            Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! Here are the <a
                            href='https://speakerdeck.com/tilomitra/pure-bliss'>slides from the presentation</a>.
                            Although it looks pretty minimalist, we’ve been working on Pure for several months. After
                            many iterations, we have released Pure as a set of small, responsive, CSS modules that you
                            can use in every web project.
                        </p>
                    </div>
                </section>
            </div>

        );
    },
    deleteItem: function (e) {
        debugger;
        CommentActionCreators.deleteCommentItem(this.props);
    }
});

module.exports = CommentText;