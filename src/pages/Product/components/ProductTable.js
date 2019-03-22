import React, { Component } from 'react';

import { connect } from 'dva';

//common Delete Popconfirm components
import DeletePopconfirm from 'components/DeletePopconfirm';

import ProductModal from './ProductModal';

import { Button, Table, Divider } from 'antd';

const ProductTable = ({ dispatch, product: state, loading }) => {

  function handleDelete(_id) {
    dispatch({
      type: 'product/deleteData',
      payload: {
        _id
      }
    });
  }

  const columns = [{
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    width: '45%'
  }, {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    width: '20%'
  }, {
    title: '邮费',
    dataIndex: 'postage',
    key: 'postage',
    width: '20%'
  }, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    width: '15%',
    render: (text, record) => {
      return(
        <div>
          <ProductModal dispatch={dispatch} title="编辑商品" record={record}>
            <a href="javascript:;">编辑</a>
          </ProductModal>
          <Divider type="vertical" />
          <DeletePopconfirm onConfirm={() => handleDelete(record._id)}>
            <a href="javascript:;">删除</a>
          </DeletePopconfirm>
        </div>
      )
    }
  }];

  return(
    <div>
      <div className="ant_btn_wrapper">
        <ProductModal dispatch={dispatch} title="创建商品" record={{}}>
          <Button type="primary">创建</Button>
        </ProductModal>
      </div>
      <div className="ant_table_wrapper" style={{ marginTop: 15 }}>
        <Table
          dataSource={state.list}
          columns={columns}
          loading={loading}
          rowKey="_id"
          pagination={false}
        />
      </div>
    </div>
  )
}

export default connect(({ product, loading }) => ({
  product,
  loading: loading.effects['product/query']
}))(ProductTable);
