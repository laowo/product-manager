import * as loginServices from 'services/login';

import { routerRedux } from 'dva/router';

import { message } from 'antd';

export default {

  namespace: 'global',

  state: {
    loginStatus: localStorage.getItem("loginStatus")
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      try{
        const { data } = yield call(loginServices.login, payload);
        if(data.status === 'ok') {
          yield put({
            type: 'changeLoginStatus',
            payload: data
          });
          yield put(routerRedux.push('/'));
          //本地储存登陆状态
          localStorage.setItem("loginStatus", true)
        }else{
          message.error(data.status);
        }
      }catch (e) {
        console.log(e);
      }

    },
    *logout({ payload }, { call, put }) {
      try{
        const { data } = yield call(loginServices.logout);
        if(data.status) {
          yield put({
            type: 'changeLoginStatus',
            payload: {
              status: data.loginStatus
            }
          });
          //删除本地登陆状态
          localStorage.removeItem("loginStatus");
        }else{
          message.error('操作失败！')
        }
      }catch (e) {
        console.log(e);
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload: { status } }) {
      return { ...state, loginStatus: status }
    },
  },
  // subscriptions: {
  //   setup({ history, dispatch }) {
  //     return history.listen(({ pathname }) => {
  //       if(pathname === '/system/user') {
  //         dispatch({
  //           type: 'fetchUser'
  //         });
  //       }
  //     });
  //   },
  // },
};
