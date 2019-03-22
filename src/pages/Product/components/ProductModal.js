import React, { Component } from 'react';

import { Modal, Form, Input, InputNumber } from 'antd';

class ProductModal extends Component{

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handleShowModal = () => {
    this.setState({
      visible: true
    })
  }

  handleHideModal = () => {
    this.setState({
      visible: false
    })
    setTimeout(() => {
      this.props.form.resetFields();
    }, 0);
  }

  handleOk = () => {
    this.props.form.validateFields((err, values) => {
      if(!err) {
        const { _id } = this.props.record;
        const { dispatch } = this.props;
        if(_id) {
          dispatch({
            type: 'product/updateProduct',
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
            type: 'product/createProduct',
            payload: { values },
            callback: () => {
              this.handleHideModal();
            }
          });
        }
      }
    });
}

  render() {
    const { title } = this.props;
    const { name, price, postage } = this.props.record;
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
          visible={this.state.visible}
          title={title}
          okText="确定"
          cancelText="取消"
          onOk={this.handleOk}
          onCancel={this.handleHideModal}
        >
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
             <Form.Item
               label="名称"
             >
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: '请输入商品名称！',
                }],
                initialValue: name
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="价格"
            >
              {getFieldDecorator('price', {
                initialValue: price
              })(
                <InputNumber
                  formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\￥\s?|(,*)/g, '')}
                />
              )}
            </Form.Item>
            <Form.Item
              label="邮费"
            >
              {getFieldDecorator('postage', {
                initialValue: postage
              })(
                <InputNumber
                  formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\￥\s?|(,*)/g, '')}
                />
              )}
            </Form.Item>
          </Form>
        </Modal>
      </span>
    )
  }
}

export default Form.create()(ProductModal);
