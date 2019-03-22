import React from 'react';

import { connect } from 'dva';

import styles from './index.css';

import LoginForm from './components/LoginForm';

const Login = ({ dispatch, global: globalState, loading }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.logo}>后台管理</p>
      <LoginForm dispatch={dispatch} loading={loading} />
    </div>
  )
}

export default connect(({ global, loading }) => {
  const status = loading.effects['global/login'];
  const loginLoading = status ? true : false;
  return {
    global,
    loading: loginLoading
  }
})(Login);
