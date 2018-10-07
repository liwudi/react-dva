/**
 * Created by mapbar_front on 2018/10/7
 */
import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
// 加载导出模块
import * as Exporting from 'highcharts/modules/exporting';

import styles from './index.less';

Exporting(Highcharts);

export default class Hcharts extends Component{
  componentDidMount() {
    this.charts = Highcharts.chart(this.dom, this.props.options);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.change !== nextProps.change) {
      this.charts && this.charts.destroy();
      this.charts = Highcharts.chart(this.dom, this.props.options);
    }
  }
  render() {
    return (
      <div ref={(dom) => this.dom = dom} className={styles.chartsBox}>

      </div>
    );
  }
}
