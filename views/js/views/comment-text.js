var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentText = React.createClass({
    getLocalTime: function (nS) {
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
    },
    render: function () {
        debugger;
        var time = this.props.time + "00";
        var date = this.getLocalTime(time);
        var hrefStr = "#atricleid/" + this.props.id;
        var tap;
        switch (this.props.sort) {
            case "1":
                tap = (<a className='post-category post-category-pure' href='#'>CSS</a>);
                break;
            case "2":
                tap = (<a className='post-category post-category-design' href='#'>技术</a>);
                break;
            default:
                tap = (<a className='post-category post-category-design' href='#'>不知</a>);
                break;
        }
        return (
            <div className='posts'>
                <h1 className='content-subhead'>{date}</h1>
                <section className='post'>
                    <header className='post-header'>
                        <img className='post-avatar' alt='Tilo Mitra&#x27;s avatar' height='48' width='48'
                             src='/spingmvc/resource/img/icon.jpg'/>
                        <h2 onClick={this.enter} className='post-title'><a href={hrefStr}>{this.props.title}</a></h2>
                        <p className='post-meta'>
                            <a className='post-author'>{this.props.author}</a>
                            <a> 点赞留言功能尚未开通 </a>
                            {tap}
                        </p>
                    </header>
                    <div id={this.props.id} className='post-description'>
                        <p>
                            {this.props.text}
                        </p>
                    </div>
                </section>
            </div>

        )
            ;
    },
    enter: function () {
        $('html, body,#app').animate({scrollTop: 0}, 'slow');
        var data = {
            ArticleId: this.props.id
        }
        CommentActionCreators.getArticle(data);
    }
});

module.exports = CommentText;