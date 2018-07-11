/**
 * Created by mapbar_front on 2018/7/10.
 */
import fetchUsers from '../services/users';
export default {
  namespace: 'user',
  state: {
    username: 'mapbar_front',
    password: '123456',
    users: []
  },
  reducers: {
    login(state, { payload: userInfo }) {
      return { ...state, ...userInfo}
    },
    save(state, action) {
      return {
        ...state,
        list: action.data
      }
    }
  },
  effects: {
    *fetch (action, { put, call }){
      const users = yield call(fetchUsers, action.data);
      yield put({ type: 'save', data: users });
    }
  },
  subscriptions: {
    setup({ dispatch, history }){
      return history.listen(({ pathname }) => {
        if (pathname === '/login') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  }
}
