/**
 * Created by mapbar_front on 2018/10/8
 */
import request from '../utils/request';
import config from '../utils/config';

const url = 'https://data.jianshukeji.com/geochina/china.js';




export async function getChinaData() {
  return request(url)
}
