/**
 * Created by mapbar_front on 2018/10/6
 */
import React, { Component } from 'react';
import echarts from 'echarts';
import Highcharts from 'highcharts/highstock';
// 加载导出模块
import * as Exporting from 'highcharts/modules/exporting';

import MyCharts from '../../../components/Echarts';
import HCharts from '../../../components/Hcharts';
import styles from './index.less';
import { options, options_BrokenLine, options_Bar } from './dataSource';
// 初始化导出模块
Exporting(Highcharts);

export default class Echarts extends Component{
  constructor(props) {
    super(props);
    this.state = {
      changeData: 0,
      option: {
        title: {
          text: '用户访问趋势图'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      },
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
  }
  componentWillUnmount() {
    window.onresize = function () {}
  }
  render(){
    return (
      <div className={styles.echarts}>
        <div className="flex1 flexBox">
          <div className="flex1 padding5">
            <HCharts change={this.state.changeData} options={options}></HCharts>
          </div>
          <div className="flex1 padding5">
            <HCharts change={this.state.changeData} options={options_BrokenLine}></HCharts>
          </div>
        </div>
        <div className="flex1 flexBox">
          <div className="flex1 padding5">
            <HCharts change={this.state.changeData} options={options_Bar}></HCharts>
          </div>
          <div className="flex1 padding5">
            <MyCharts options={this.state.option2}></MyCharts>
          </div>
        </div>
      </div>
    )
  }
}
