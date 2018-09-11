/**
 * Created by mapbar_front on 2018/9/10.
 */
import { getWeatherInfo } from '../services/dashboard';

export default {
  namespace: 'dashboard',
  state: {
    username: 'mapbar_front',
    weatherInfo: null,
  },
  effects: {
    *getWeatherInfo({ payload }, { call, put }) {
      const res = yield call(getWeatherInfo);
      console.log('getWeatherInfo',res);
    }
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/index/dashboard') {
          dispatch({
            type: 'getWeatherInfo',
          });
        }
      })
    }
  }
}
