/**
 * Created by mapbar_front on 2018/10/6
 */
import React, { Component } from 'react';
import echarts from 'echarts';
import Highcharts from 'highcharts/highstock';
import HighMaps from 'highcharts/highmaps';
// 加载导出模块
import * as Exporting from 'highcharts/modules/exporting';

import MyCharts from '../../../components/Echarts';
import HCharts from '../../../components/Hcharts';
import styles from './index.less';
import { options, options_BrokenLine, options_Bar, options_area } from './dataSource';
// 初始化导出模块
Exporting(Highcharts);

export default class Echarts extends Component{
  constructor(props) {
    super(props);
    this.state = {
      changeData: 0,
      option2: {
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
              {value:235, name:'视频广告'},
              {value:274, name:'联盟广告'},
              {value:310, name:'邮件营销'},
              {value:335, name:'直接访问'},
              {value:400, name:'搜索引擎'}
            ]
          }
        ]
      },
    }
  }
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
