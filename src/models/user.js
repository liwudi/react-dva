/**
 * Created by mapbar_front on 2018/7/10.
 */
// import fetchUsers from '../services/users';
import { getUser } from '../services/users';
export default {
  namespace: 'user',
  state: {
    username: 'guest',
    password: 'guest',
    users: []
  },
  reducers: {
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
      const users = yield call(getUser, action.data);
      console.log(users);
      yield put({ type: 'save', data: users });
    }
  },
  subscriptions: {
    setup({ dispatch, history }){
      return history.listen(({ pathname }) => {
        if (pathname === '/login') {
          //dispatch({ type: 'fetch' });
        }
      });
    },
  }
}
