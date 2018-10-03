/**
 * Created by mapbar_front on 2018/9/18
 */
import React, { Component } from 'react';
import echarts from 'echarts';
import MyCharts from '../../../components/Echarts';
import styles from './index.less';

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
  render(){
    return (
      <div className={styles.echarts}>
        <div className="flex1">
          <MyCharts options={this.state.option}></MyCharts>
        </div>
        <div className="flex1">
          <MyCharts options={this.state.option2}></MyCharts>
        </div>
      </div>
    )
  }
}
