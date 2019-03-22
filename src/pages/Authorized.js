import React from 'react';

import { connect } from 'dva';

import Redirect from 'umi/redirect';

const Authorized = ({ children, global: globalState }) => {
  return globalState.loginStatus ? (
    <div style={{width: '100%', height: '100%'}}>
      { children }
    </div>
  ) : <Redirect to="/user/login" />
}

export default connect(({ global }) => {
  return{
    global
  }
})(Authorized);
