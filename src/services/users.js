/**
 * Created by mapbar_front on 2018/7/11.
 */
import request from '../utils/request';
import { get } from '../utils/request'
export default function fetchUsers() {
  return request('/api1/users');
}
export function getUser() {
  return get();
}
