/**
 * Created by mapbar_front on 2018/10/6
 */
import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighMaps from 'highcharts/highmaps';
// 加载导出模块
import * as Exporting from 'highcharts/modules/exporting';

import MyCharts from '../../../components/Echarts';
import HCharts from '../../../components/Hcharts';
import styles from './index.less';
import { options, options_BrokenLine, options_Bar, options_area, CHINA } from './dataSource';
// 初始化导出模块
Exporting(Highcharts);

export default class Echarts extends Component{
  componentDidMount() {
    window.onresize = () => {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setState({
          changeData: Math.random()
        })
      }, 300)
    }
    // const url = 'https://data.jianshukeji.com/geochina/china.js';
    var map = HighMaps.mapChart('container', {
      title: {
        text: '中国地图'
      },
      colorAxis: {
        min: 0,
        minColor: 'rgb(255,255,255)',
        maxColor: '#006cee'
      },
      series: [{
        mapData: CHINA,
        joinBy: 'name',
        name: '随机数据',
        data: [{"name":"北京","value":11},{"name":"天津","value":81},{"name":"河北","value":77},{"name":"山西","value":65},{"name":"内蒙古","value":79},{"name":"辽宁","value":80},{"name":"吉林","value":97},{"name":"黑龙江","value":43},{"name":"上海","value":59},{"name":"江苏","value":87},{"name":"浙江","value":39},{"name":"安徽","value":68},{"name":"福建","value":23},{"name":"江西","value":28},{"name":"山东","value":38},{"name":"河南","value":13},{"name":"湖北","value":53},{"name":"湖南","value":40},{"name":"广东","value":82},{"name":"广西","value":42},{"name":"海南","value":9},{"name":"重庆","value":77},{"name":"四川","value":98},{"name":"贵州","value":37},{"name":"云南","value":67},{"name":"西藏","value":1},{"name":"陕西","value":23},{"name":"甘肃","value":50},{"name":"青海","value":73},{"name":"宁夏","value":8},{"name":"新疆","value":80},{"name":"台湾","value":57},{"name":"香港","value":9},{"name":"澳门","value":88},{"name":"南海诸岛","value":36},{"name":"南海诸岛","value":58}]
      }]
    });
  }
  componentWillUnmount() {
    window.onresize = function () {}
  }
  render(){
    return (
      <div className={styles.echarts}>

        <div className={styles.charts}>
          <div style={{ width: '50%', minHeight: '300px', float: 'left' }} className="padding5">
            <HCharts change={this.state.changeData} options={options}></HCharts>
          </div>
          <div style={{ width: '50%', minHeight: '300px', float: 'left' }} className="padding5">
            <HCharts change={this.state.changeData} options={options_BrokenLine}></HCharts>
          </div>

          <div style={{ width: '50%', minHeight: '300px', float: 'left' }} className="padding5">
            <HCharts change={this.state.changeData} options={options_Bar}></HCharts>
          </div>
          <div style={{ width: '50%', minHeight: '300px', float: 'left' }} className="padding5">
            <HCharts options={this.state.changeData} options={options_area}></HCharts>
          </div>
        </div>
        <div id='container' className={`${styles.map}`}>

        </div>
      </div>
    )
  }
}
