var React = require('react');


var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
    return {
        article_class: CommentStore.getArticleClass()
    }
}
function createMarkup(str) {
    return {__html: str};
};
var CommentText = React.createClass({
    getLocalTime: function (nS) {
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
    },
    getInitialState: function () {
        return getStateFromStore();
    },
    onChange: function () {
        debugger;
        this.setState(getStateFromStore());
    },
    render: function () {
        debugger;
        var time = this.props.time + "00000";
        var myDate = new Date(Number(time));
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        var date = myDate.getDate();
        var dateArr = ["日", "一", '二', '三', '四', '五', '六'];
        var day = myDate.getDay();
        var date = " " + year + "年" + month + "月" + date + "日" + " 星期" + dateArr[day] + " ";

        var hrefStr = "#atricleid/" + this.props.id;
        var tap;
        var className = "post-category";
        switch (this.props.sort) {
            case "1":
                className += ( " " + this.state.article_class["1"].class);
                tap = (<a className={className} href='#'>{this.state.article_class["1"].name}</a>);
                break;
            case "2":
                className += " " + this.state.article_class["2"].class;
                tap = (<a className={className} href='#'>{this.state.article_class["2"].name}</a>);
                break;
            case "3":
                className += " " + this.state.article_class["3"].class;
                tap = (<a className={className} href='#'>{this.state.article_class["3"].name}</a>);
                break;
            default:
                className += " " + this.state.article_class["4"].class;
                tap = (<a className={className} href='#'>{this.state.article_class["4"].name}</a>);
                break;
        }
        return (
            <div className='posts'>
                <h1 className='content-subhead'><i className="fa fa-calendar fa-lg"></i>{date}</h1>
                <section className='post'>
                    <header className='post-header'>
                        <a href="#resume">
                            <img className='post-avatar' alt='Tilo Mitra&#x27;s avatar' height='48' width='48'
                                 src='/spingmvc/resource/img/icon.jpg'/></a>

                        <h2 className='post-title'><a href={hrefStr+"/top"}>{this.props.title}</a></h2>
                        <p className='post-meta'>
                            <a>作者:</a>
                            <a className='post-author'>{this.props.author}</a>
                            <a>&nbsp;|&nbsp;所属于:</a>
                            {tap}
                            <a href={hrefStr+"/bottom"}>&nbsp;|&nbsp;评论:</a>
                            <a>{this.props.commentCount}</a>
                            <a >&nbsp;|&nbsp;浏览次数:</a>
                            <a>{this.props.click}</a>
                        </p>
                    </header>
                    <div id={this.props.id} className='post-description'>
                        <p>
                            {this.props.text}<a href={hrefStr+"/top"}>&nbsp;阅读全文</a>
                        </p>
                    </div>
                </section>
            </div>

        );
    }
});

module.exports = CommentText;