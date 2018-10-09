/**
 * Created by mapbar_front on 2018/10/8
 */
import { getChinaData } from '../services/hcharts';
export default {
  namespace: 'hchart',
  state: {
    chinaData: null,
  },
  reducers: {
    updateStatus(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    }
  },
  effects: {
    *getChinaData (action, { call, put }){
      const chinaData = yield call(getChinaData, action.data);
      console.log('chinaData', chinaData);
      yield put({
        type: 'updateStatus',
        payload: {
          chinaData: chinaData
        }
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }){
      return history.listen(({ pathname }) => {
        if (pathname === '/index/hchart') {
          dispatch({ type: 'getChinaData' });
        }
      });
    },
  }
}
