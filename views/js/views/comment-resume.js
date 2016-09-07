var React = require('react');


var CommentsResume = React.createClass({

    componentDidMount: function () {
        $('html, body,#app').animate({scrollTop: 0}, 'slow');
    },
    render: function () {


        return (
            <div className='posts'>
                <h2 className='content-subhead'><i className="fa fa-user fa-lg"></i>&nbsp; 关于我</h2>
                <section className='post'>
                    <div className="user">
                        <div className="user-common user-herder">
                            <img className="user-pic"
                                 src="http://192.168.31.137:8091/spingmvc/resource/picture/$GG3.jpg"/>
                        </div>

                        <div className="user-common">
                            <ul className="user-des">
                                <li><h3>Jack</h3><p></p></li>
                                <li><h4>My targets is make Happiness full my life</h4><p></p></li>
                                <li><h3>China University of Geosciences</h3><p></p></li>
                                <li><h4>Bachelor’s degree</h4><p></p></li>
                                <li><h3>Live in Beijing</h3><p></p></li>

                            </ul>
                        </div>

                        <div className="user-common">
                            <ul className="user-des">
                                <p className='center'>
                                    爱学习,爱生活.
                                </p>
                                <p>
                                    Love study , Love life.
                                </p>
                                <h3>
                                    Web Skill
                                </h3>
                                <p className='center'>Javascript:
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                </p>
                                <p className='center'>CSS:
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                </p>
                                <p className='center'>Html:
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                </p>
                                <h3>
                                    Service Skill
                                </h3>
                                <p className='center'>Java:
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                </p>
                                <p className='center'>C#:
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                </p>
                                <p className='center'>Node.js:
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                    <i className="fa fa-star-o fa-lg"></i>
                                </p>
                            </ul>
                        </div>
                        <div className="user-common">
                            <ul className="user-des">
                                <li>
                                    <img className="user-epic"
                                         src="http://ggwebsite.duapp.com/resource/wechart/we860.jpg"/>
                                    <p className='center'>微信公众号</p>
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