import React, { Component } from 'react';

import { connect } from 'dva';

//公用的delete Popconfirm组件
import DeletePopconfirm from 'components/DeletePopconfirm';

import UserModal from './UserModal';

import { Table, Divider, Button, Popconfirm } from 'antd';

const UserTable = ({ dispatch, user: state, loading }) => {

  function handleDelete(_id) {
    dispatch({
      type: 'user/deleteData',
      payload: {
        _id
      }
    });
  }

  const columns = [{
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    width: '20%'
  }, {
    title: '别名',
    dataIndex: 'nickname',
    key: 'nickname',
    width: '20%'
  }, {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    width: '30%'
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: '15%',
    render(text) {
      return text ? '活动' : '禁止';
    }
  }, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    width: '15%',
    render: (text, record) => {
      return(
        <div>
          <UserModal title="编辑用户" record={record} dispatch={dispatch}>
            <a href="javascript:;">编辑</a>
          </UserModal>
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
        <UserModal title="创建用户" record={{}} dispatch={dispatch}>
          <Button type="primary">创建</Button>
        </UserModal>
      </div>
      <div className="ant_table_wrapper" style={{marginTop: 15 }}>
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

export default connect(({ user, loading }) => ({
  user,
  loading: loading.effects['user/query']
}))(UserTable);
