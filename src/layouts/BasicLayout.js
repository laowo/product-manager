import React from 'react';

import styles from './index.css';

import { connect } from 'dva';

//Menu组件
import HeaderMenu from './HeaderMenu';

import { Layout, Icon } from 'antd';

const { Header, Content } = Layout;

const BasicLayout = (props) => {

  function handleLogout() {
    const { dispatch } = props;
    dispatch({
      type: 'global/logout'
    });
  }

  return(
    <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo}/>
        <a href="javascript:;" onClick={handleLogout}>
          <Icon type="logout" className={styles.logout}/>
        </a>
        <HeaderMenu />
      </Header>
      <Content className={styles.layout_content}>
        {props.children}
      </Content>
    </Layout>
  )
};

export default connect()(BasicLayout);
