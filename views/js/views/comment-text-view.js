var React = require('react');


function createMarkup(str) {
    return {__html: str};
};


var Comments = React.createClass({



    render: function () {

        //var itemJsx, type = "", list = [];
        //var imgList = [
        //    {title: '就是测试', url: 'http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg'},
        //    {title: '就是测试', url: 'http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg'}
        //];
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

        return (

            <div className='content-text'>
                <div dangerouslySetInnerHTML={createMarkup(html)}/>
            </div>


        )
    }
});

module.exports = Comments;