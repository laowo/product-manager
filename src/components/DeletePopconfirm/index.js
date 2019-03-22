import React from 'react';

import { Popconfirm } from 'antd';

export default (props) => (
  <Popconfirm
    title="确认要删除吗？"
    okText="确定"
    cancelText="取消"
    {...props}
  >
    {props.children}
  </Popconfirm>
);
