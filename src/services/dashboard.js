/**
 * Created by mapbar_front on 2018/9/10.
 */
import request from '../utils/request';
import config from '../utils/config';

const url = 'https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key='+config.key;

export async function getWeatherInfo() {
  return request(url)
}
