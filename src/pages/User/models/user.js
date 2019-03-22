import * as userServices from '../services/user';

import { message } from 'antd';

export default {
  namespace: 'user',
  state: {
    list: []
  },
  effects: {
    *query({ payload }, { call, put }) {
      try {
        const { data } = yield call(userServices.query, payload);
        if(data.status) {
          yield put({
            type: 'save',
            payload: data.data
          });
        }else{
          message.error('数据获取失败！')
        }
      }catch (e) {
        console.log(e);
      }
    },
    *createUser({ payload, callback }, { call, put }) {
      try {
        const { data } = yield call(userServices.create, payload);
        if(data.status) {
          message.success('数据添加成功！');
          if(callback && typeof callback === 'function') {
            callback();
          }
          //刷新数据
          yield put({
            type: 'query'
          });
        }
      }catch (e) {
        console.log(e);
      }
    },
    *updateUser({ payload, callback }, { call, put }) {
      try {
        const { data } = yield call(userServices.update, payload);
        if(data.status) {
          message.success('数据修改成功！');
          if(callback && typeof callback === 'function') {
            callback();
          }
          //刷新数据
          yield put({
            type: 'query'
          });
        }
      }catch (e) {
        console.log(e);
      }
    },
    *deleteData({ payload }, { call, put }) {
      try {
        const { data } = yield call(userServices.deleteData, payload);
        if(data.status) {
          message.success('数据删除成功！');
          yield put({
            type: 'query'
          });
        }else{
          message.error("数据删除失败！");
        }
      }catch (e) {
        console.log(e);
      }
    }
  },
  reducers: {
    save(state, { payload: list }) {
      return { ...state, list }
    }
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/system/user') {
          dispatch({ type: 'query', payload: query });
        }
      });
    },
  },

}
