var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentStore = require('../stores/comment-store');

var message = {};

function SetCookie(name, value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)//取cookies函数
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;

}
function delCookie(name)//删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

var CommentMessage = React.createClass({

    submit: function () {
        SetCookie("name", $("#msg-name").val());

        $("#msg-content").val("");
        message.articleId = this.props.id;
        message.name = $("#msg-name").val();
        CommentActionCreators.submitMessage(message);
    }, contentChange: function (e) {
        message.content = e.target.value;
    },
    componentDidMount: function () {
        var name = getCookie("name") || "";
        $("#msg-name").val(name);
    },
    render: function () {
        var comments = [];
        for (var i in this.props.comments) {

            var item = (
                <div className="message-item pure-g">
                    <div className="pure-u-3-4">
                        <h5 className="message-name">{this.props.comments[i].username + "     说:"}</h5>

                        <p className="message-desc">
                            {this.props.comments[i].content}
                        </p>
                    </div>
                </div>);
            comments.push(item);
        }

        return (
            <div id="layout" className="pure-g posts">

                <h1 className='content-subhead'><i className="fa fa-calendar fa-lg"></i>留言版</h1>
                <div id="list" className="pure-u-1">
                    {comments}
                    <div className="message-item pure-g">
                        <div className="pure-u-1-1">
                            <div className="pure-form">
                                <fieldset className="pure-group">
                                    <input id="msg-name" type="text" onChange={this.nameChange} className="pure-input-1"
                                           placeholder="你的的名字"/>
                                </fieldset>

                                <fieldset className="pure-group">
                                    <textarea id="msg-content" className="pure-input-1" onChange={this.contentChange}
                                              placeholder="内容"></textarea>
                                </fieldset>

                                <button type="submit" onClick={this.submit}
                                        className="pure-button pure-input-1 pure-button-primary">发布
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }

});

module.exports = CommentMessage;