var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var user = {};
var CommentLogin = React.createClass({
    render: function () {
        return (
            <div className='posts'>
                <h1 className='content-subhead'>Pinned Post</h1>
                <div className='pure-form pure-form-stacked'>
                    <fieldset>
                        <legend>堆叠式表单</legend>

                        <label for='email'>Email</label>
                        <input onChange={this.nameChange} id='email' type='email' placeholder='Email'/>

                        <label for='password'>Password</label>
                        <input onChange={this.passwordChange} id='password' type='password' placeholder='Password'/>

                        <label for='state'>State</label>
                        <select id='state'>
                            <option>AL</option>
                            <option>CA</option>
                            <option>IL</option>
                        </select>

                        <label for='remember' className='pure-checkbox'>
                            <input id='remember' type='checkbox'/> Remember me
                        </label>

                        <button onClick={this.submit} className='pure-button pure-button-primary'>Sign in</button>
                    </fieldset>
                </div>
            </div>

        );
    },
    deleteItem: function (e) {
        debugger;
        CommentActionCreators.deleteCommentItem(this.props);
    },
    nameChange: function (e) {
        user.user = e.target.value;
    }, passwordChange: function (e) {
        user.password = e.target.value;
    } ,submit: function (e) {
        debugger;
        CommentActionCreators.loginUser(user);
    },
});

module.exports = CommentLogin;