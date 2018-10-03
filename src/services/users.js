/**
 * Created by mapbar_front on 2018/7/11.
 */
import request from '../utils/request';
export function fetchUsers() {
  return request('/api1/users');
}
