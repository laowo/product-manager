import * as productServices from '../services/product';

import { message } from 'antd';

export default {
  namespace: 'product',
  state: {
    list: []
  },
  reducers: {
    save(state, { payload: list }) {
      return { ...state, list };
    }
  },
  effects: {
    *query(_, { call, put }) {
      try {
        const { data } = yield call(productServices.query);
        if(data.status) {
          yield put({
            type: 'save',
            payload: data.data
          });
        }else{
          message.error('数据获取失败！');
        }
      }catch (e) {
        console.log(e);
      }
    },
    *createProduct({ payload, callback }, { call, put }) {
      try {
        const { data } = yield call(productServices.create, payload);
        if(data.status) {
          message.success('数据添加成功！');
          if(callback && typeof callback === 'function') {
            callback();
          }
          yield put({type: 'query'});
        }else{
          message.error('数据添加失败！');
        }
      }catch (e) {
        console.log(e);
      }
    },
    *updateProduct({ payload, callback }, { call, put }) {
      try{
        const { data } = yield call(productServices.update, payload);
        if(data.status) {
          message.success('数据修改成功！')
          if(callback && typeof callback === 'function') {
            callback();
          }
          yield put({type: 'query'});
        }else{
          message.error('数据修改失败！');
        }

      }catch (e) {
        console.log(e);
      }
    },
    *deleteData({ payload }, { call, put }) {
      try {
        const { data } = yield call(productServices.deleteData, payload);
        if(data.status) {
          message.success('数据删除成功！');
          yield put({type: 'query'});
        }else{
          message.error('数据删除失败！')
        }
      }catch (e) {
        console.log(e);
      }
    }
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname, query }) => {
        if(pathname === '/system/product') {
          dispatch({type: 'query'});
        }
      });
    },
  },
}
