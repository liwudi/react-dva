/**
 * Created by mapbar_front on 2018/10/6
 */
import React, { Component } from 'react';
import echarts from 'echarts';
import Highcharts from 'highcharts/highstock';
// 加载导出模块
import * as Exporting from 'highcharts/modules/exporting';

import MyCharts from '../../../components/Echarts';
import styles from './index.less';

// 初始化导出模块
Exporting(Highcharts);


export default class Echarts extends Component{
  constructor(props) {
    super(props);
    this.state = {
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
    var options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: '我的第一个图表',
      },
      xAxis: {
        categories: ['苹果', '香蕉', '橙子'],
      },
      yAxis: {
        title: {
          text: '吃水果个数',
        }
      },
      series: [{
        name: '小明',
        data: [1, 0, 4],
      }, {
        name: '小红',
        data: [5, 7, 3],
      }]
    };


    this.timer = 0;
    window.onresize = () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.charts && this.charts.destroy()
        // this.charts && this.charts.reflow();
        this.charts = Highcharts.chart('container', options);
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
          <div className="flex1">
            {/*<MyCharts options={this.state.option}></MyCharts>*/}
          </div>
          <div ref={dom => this.dom = dom} id='container' className="flex1"></div>
        </div>
        <div className="flex1 flexBox">
          <div className="flex1"></div>
          <div className="flex1">
            <MyCharts options={this.state.option2}></MyCharts>
          </div>
        </div>
      </div>
    )
  }
}
