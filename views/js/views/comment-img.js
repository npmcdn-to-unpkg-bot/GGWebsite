var React = require('react');


var CommentActionCreators = require('../actions/comment-action-creators');
var BlogImg = require('../views/widgets/blogimg');
var CommentImg = React.createClass({
    render: function () {
        var list = [];
        debugger;
        for (var i in this.props.list) {
            list.push(<BlogImg url={this.props.list[i].url} title={this.props.list[i].title}/>)
        }

        return (

            <div className='posts'>
                <h1 className='content-subhead'>{this.getTime()}</h1>
                <section className='post'>
                    <header className='post-header'>
                        <a href="#resume">
                            <img className='post-avatar' alt='Tilo Mitra&#x27;s avatar' height='48' width='48'
                                 src='/spingmvc/resource/img/icon1.jpg'/>
                        </a>

                        <h2 className='post-title'>{this.props.title}</h2>
                        <p className='post-meta'>
                            By <a href='#' className='post-author'>{this.props.author}</a> 置顶 <a
                            className='post-category post-category-design' href='#'>美图</a> <a
                            className='post-category post-category-pure' href='#'>近照</a>
                        </p>
                    </header>

                    <div className='post-description'>
                        <div className='post-images pure-g'>
                            {list}
                        </div>
                    </div>
                </section>
            </div>



        );
    },
    getTime: function () {
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        var date = myDate.getDate();
        var dateArr = ["日", "一", '二', '三', '四', '五', '六'];
        var day = myDate.getDay();
        return " " + year + "年" + month + "月" + date + "日" + " 星期" + dateArr[day] + " ";
    }
});

module.exports = CommentImg;