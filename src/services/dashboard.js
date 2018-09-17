/**
 * Created by mapbar_front on 2018/9/10.
 */
import request from '../utils/request';
import config from '../utils/config';

const url = 'http://wthrcdn.etouch.cn/weather_mini?city=北京市';

export async function getWeatherInfo() {
  return request(url)
}
