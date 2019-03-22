import React from 'react';

import Link from 'umi/link';

import withRouter from 'umi/withRouter';

import { Menu } from 'antd';

const menuData = [{
  text: '用户管理',
  pathname: '/system/user'
}, {
  text: '商品管理',
  pathname: '/system/product'
}]

const HeaderMenu = ({ location }) => {
  return(
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[location.pathname]}
      style={{ lineHeight: '64px' }}
    >
      {
        menuData.map((item) => (
          <Menu.Item key={item.pathname}>
            <Link to={item.pathname}>{item.text}</Link>
          </Menu.Item>
        ))
      }
    </Menu>
  )
}

export default withRouter(HeaderMenu);
