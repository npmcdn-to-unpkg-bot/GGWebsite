var React = require('react');


var CommentsResume = React.createClass({



    render: function () {



        return (
            <div className='posts'>
                <h2 className='content-subhead'><i className="fa fa-user fa-lg"></i>&nbsp; 关于我</h2>
                <section className='post'>
                    <div className="user">
                        <div className="user-common user-herder">
                            <img className="user-pic" src="http://192.168.31.137:8091/spingmvc/resource/picture/$GG3.jpg"/>
                        </div>

                        <div className="user-common">
                            <ul className="user-des">
                                <li><h3>郭峰</h3><p></p></li>
                                <li><h4>立志成为一个伟大的前端工程师</h4><p></p></li>
                                <li><h4>中国地质大学</h4><p></p></li>
                                <li><h4>本科</h4><p></p></li>
                                <li><h4>现居北京</h4><p></p></li>

                            </ul>
                        </div>

                        <div className="user-common">
                            <ul className="user-des">
                                <p>
                                    我是一个好人
                                </p>
                            </ul>
                        </div>
                        <div className="user-common">
                            <ul className="user-des">
                                <li>
                                    <img className="user-epic" src="http://ggwebsite.duapp.com/resource/wechart/we860.jpg"/>
                                        <p>微信公众号</p>
                                </li>

                            </ul>
                        </div>

                    </div>
                </section>
            </div>

        )
    }
});

module.exports = CommentsResume;