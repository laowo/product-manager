import React, { Component } from 'react';

import { Modal, Form, Input, Switch } from 'antd';

class UserModal extends Component{

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handleShowModal = () => {
    this.setState({
      visible: true
    });
  }

  handleHideModal = () => {
    this.setState({
      visible: false
    });
    setTimeout(() => {
      this.props.form.resetFields();
    }, 0)
  }

  handleOk = () => {
    this.props.form.validateFields((err, values) => {
      if(!err) {
        const { _id } = this.props.record;
        const { dispatch } = this.props;
        if(_id) {
          dispatch({
            type: 'user/updateUser',
            payload: {
              _id,
              values
            },
            callback: () => {
              this.handleHideModal();
            }
          });
        }else{
          dispatch({
            type: 'user/createUser',
            payload: {
              values
            },
            callback: () => {
              this.handleHideModal();
            }
          });
        }
      }
    })
  }

  render() {
    const { title } = this.props;
    const { username, nickname, email, status } = this.props.record;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    return(
      <span>
        <span onClick={this.handleShowModal}>{this.props.children}</span>
        <Modal
          title={title}
          okText="确定"
          cancelText="取消"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleHideModal}
        >
         <Form {...formItemLayout} onSubmit={this.handleSubmit}>
           <Form.Item
             label="用户名"
           >
            {getFieldDecorator('username', {
              rules: [{
                required: true, message: '请输入你的用户名！',
              }],
              initialValue: username
            })(
              <Input />
            )}
          </Form.Item>
           <Form.Item
             label="别名"
           >
            {getFieldDecorator('nickname', {
              initialValue: nickname
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="邮箱"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '邮箱格式不正确！',
              }],
              initialValue: email
            })(
              <Input />
            )}
          </Form.Item>
           <Form.Item
             label="状态"
           >
            {getFieldDecorator('status', {
              valuePropName: 'checked',
              initialValue: status ? true : false
            })(
              <Switch />
            )}
          </Form.Item>
         </Form>
        </Modal>
      </span>
    )
  }
}

export default Form.create()(UserModal);
