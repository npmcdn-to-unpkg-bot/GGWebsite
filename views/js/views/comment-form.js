var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');
var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
    return {
        userData: CommentStore.getUserData()
    }
}

var CommentForm = React.createClass({

    onSubmit: function (e) {
        debugger;
        var nameNode = this.refs.name.getDOMNode();
        var name = nameNode.value;

        var desNode = this.refs.des.getDOMNode();
        var des = desNode.value;


        CommentActionCreators.createComment({
            name: name,
            des:des
        });
        CommentActionCreators.alertChange("open");
    },
    getInitialState: function () {
        return getStateFromStore();
    },
    render: function () {
        return (
            <div className='modal fade' tabindex='-1' role='dialog' id='comment-adder'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span
                                aria-hidden='true'>&times;</span></button>
                            <h4 className='modal-title' id='gridSystemModalLabel'>添加卡片</h4>
                        </div>
                        <div className='modal-body'>
                            <div className='container-fluid'>

                                <div className='row'>
                                    <h4 className='col-md-4'>卡片名称：</h4>
                                    <div className='col-md-4'>
                                        <input ref='name'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <h4 className='col-md-4'>使用规则：</h4>
                                    <div className='col-md-4'>
                                        <input ref='des'/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='modal-footer'>
                            <a type='button' className='btn btn-default' data-dismiss='modal'>关闭</a>
                            <a type='button' herf="#" className='btn btn-primary' onClick={this.onSubmit}>保存
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    onChange: function () {
        this.setState(getStateFromStore());
    },
    componentDidMount: function () {
        CommentStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        CommentStore.removeChangeListener(this.onChange);
    },
});

module.exports = CommentForm;