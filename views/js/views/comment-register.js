var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var user = {};
var CommentRegister = React.createClass({
    render: function () {
        return (
            <div className='posts'>
                <h1 className='content-subhead'>Pinned Post</h1>
                <div className='pure-form pure-form-aligned'>
                    <fieldset>
                        <div className='pure-control-group'>
                            <label for='name'>Username</label>
                            <input onChange={this.nameChange} id='name' type='text' placeholder='Username'/>
                        </div>

                        <div className='pure-control-group'>
                            <label for='password'>Password</label>
                            <input onChange={this.passwordChange} id='password' type='password' placeholder='Password'/>
                        </div>

                        <div className='pure-control-group'>
                            <label for='email'>Email Address</label>
                            <input onChange={this.emailChange} id='email' type='email' placeholder='Email Address'/>
                        </div>

                        <div className='pure-control-group'>
                            <label for='foo'>Supercalifragilistic Label</label>
                            <input onChange={this.fooChange} id='foo' type='text'
                                   placeholder='Enter something here...'/>
                        </div>

                        <div className='pure-controls'>
                            <label for='cb' className='pure-checkbox'>
                                <input id='cb' type='checkbox'/> I've read the terms and conditions
                            </label>

                            <button onClick={this.submit} className='pure-button pure-button-primary'>Submit</button>
                        </div>
                    </fieldset>
                </div>
            </div>

        );
    },
    nameChange: function (e) {
        user.user = e.target.value;
    }, passwordChange: function (e) {
        user.password = e.target.value;
    }, emailChange: function (e) {
        user.email = e.target.value;
    }, fooChange: function (e) {
        user.foo = e.target.value;
    },
    submit: function (e) {
        CommentActionCreators.submitUser(user);
    },
    deleteItem: function (e) {
        debugger;
        CommentActionCreators.deleteCommentItem(this.props);
    }
});

module.exports = CommentRegister;