var React = require('react');

var CommentStore = require('../stores/comment-store');
var CommentActionCreators = require('../actions/comment-action-creators');


function getStateFromStore() {
    return {
        state: CommentStore.getAll()
    }
}
function createMarkup(str) {
    return {__html: str};
};


var Comments = React.createClass({

    onChange: function () {
        debugger;
        this.setState(getStateFromStore());
    },

    getInitialState: function () {
        //alert($.getUrlParam("name"));
        //var data = {start: 0, end: 5};
        //CommentActionCreators.reFlashData(data);
        return getStateFromStore();
    },

    componentDidMount: function () {
        CommentStore.addViewChangeListener(this.onChange);
    },

    componentWillUnmount: function () {
        CommentStore.removeViewChangeListener(this.onChange);
    },


    render: function () {
        debugger;
        var itemJsx, type = "", list = [];
        var imgList = [
            {title: '就是测试', url: 'http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg'},
            {title: '就是测试', url: 'http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg'}
        ];
        var value = "##就是测试啊,怎么回事\n";
        value += "***\n"
        value += "#就是测试啊,怎么回事\n";
        value += "> 就是测试啊,怎么回事\n\n";
        value += "* 就是测试啊,怎么回事\n";
        value += "* 就是测试啊,怎么回事\n";
        value += "* 就是测试啊,怎么回事\n";
        value += "[foo]: http://example.com/  \"Optional Title Her\"\n";
        value += "[foo]: http://example.com/  \"Optional Title Her\"\n";
        value += "hello[^hello]";

        value = this.props.content;

        var html = markdown.toHTML(value, 'Maruku')
        //html = parseDom(html);


        return (
            <div className='content pure-u-1 pure-u-md-3-4'>
                <div>
                    <div dangerouslySetInnerHTML={createMarkup(html)}/>
                </div>
            </div>

        )
    },
    deleteItem: function (e) {
        debugger;
        //CommentAction.deleteCommentItem(1);
    },
});

module.exports = Comments;