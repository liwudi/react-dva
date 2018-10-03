/**
 * Created by mapbar_front on 2018/7/10.
 */
// import fetchUsers from '../services/users';
import { getUser, fetchUsers } from '../services/users';
export default {
  namespace: 'user',
  state: {
    username: 'guest',
    password: 'guest',
    users: []
  },
  reducers: {
    updateStatus(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    login(state, { payload: userInfo }) {
      return { ...state, ...userInfo}
    },
    save(state, action) {
      return {
        ...state,
        users: action.data
      }
    }
  },
  effects: {
    *fetch (action, { call, put }){
      const users = yield call(fetchUsers, action.data);
      console.log(users);
      yield put({
        type: 'updateStatus',
        payload: {
          users: users.data
        }
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }){
      return history.listen(({ pathname }) => {
        if (pathname === '/index/userlist') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  }
}
