var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentImg = React.createClass({
    render: function () {
        return (
            <div className='posts'>
                <h1 className='content-subhead'>Recent Posts</h1>
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
                        <div className='post-images pure-g'>
                            <div className='pure-u-1 pure-u-md-1-2'>
                                <a href='http://www.flickr.com/photos/uberlife/8915936174/'>
                                    <img alt='Photo of someone working poolside at a resort'
                                         className='pure-img-responsive'
                                         src='http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg'/>
                                </a>

                                <div className='post-image-meta'>
                                    <h3>CSSConf Photos</h3>
                                </div>
                            </div>

                            <div className='pure-u-1 pure-u-md-1-2'>
                                <a href='http://www.flickr.com/photos/uberlife/8907351301/'>
                                    <img alt='Photo of the sunset on the beach'
                                         className='pure-img-responsive'
                                         src='http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg'/>
                                </a>

                                <div className='post-image-meta'>
                                    <h3>JSConf Photos</h3>
                                </div>
                            </div>
                            <div className='pure-u-1 pure-u-md-1-2'>
                                <a href='http://www.flickr.com/photos/uberlife/8915936174/'>
                                    <img alt='Photo of someone working poolside at a resort'
                                         className='pure-img-responsive'
                                         src='http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg'/>
                                </a>

                                <div className='post-image-meta'>
                                    <h3>CSSConf Photos</h3>
                                </div>
                            </div>

                            <div className='pure-u-1 pure-u-md-1-2'>
                                <a href='http://www.flickr.com/photos/uberlife/8907351301/'>
                                    <img alt='Photo of the sunset on the beach'
                                         className='pure-img-responsive'
                                         src='http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg'/>
                                </a>

                                <div className='post-image-meta'>
                                    <h3>JSConf Photos</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        );
    }
});

module.exports = CommentImg;