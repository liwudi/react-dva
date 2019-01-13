/**
 * Created by mapbar_front on 2018/10/6
 */
import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighMaps from 'highcharts/highmaps';
// 加载导出模块
import * as Exporting from 'highcharts/modules/exporting';

import HCharts from '../../../components/Hcharts';
import styles from './index.less';
import { options, options_BrokenLine, options_Bar, options_area, CHINA } from './dataSource';
// 初始化导出模块
Exporting(Highcharts);

export default class Echarts extends Component{
  render(){
    return (
      <div className={styles.echarts}>

        <div className={styles.charts}>
          <div style={{ width: '50%', minHeight: '300px', float: 'left' }} className="padding5">
            <HCharts options={options}></HCharts>
          </div>
          <div style={{ width: '50%', minHeight: '300px', float: 'left' }} className="padding5">
            <HCharts options={options_BrokenLine}></HCharts>
          </div>

          <div style={{ width: '50%', minHeight: '300px', float: 'left' }} className="padding5">
            <HCharts options={options_Bar}></HCharts>
          </div>
          <div style={{ width: '50%', minHeight: '300px', float: 'left' }} className="padding5">
            <HCharts options={options_area}></HCharts>
          </div>
        </div>
        <div id='container' className={`${styles.map}`}>

        </div>
      </div>
    )
  }
}
