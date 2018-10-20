/**
 * Created by mapbar_front on 2018/9/18
 */
import React, { Component } from 'react';
import styles from './index.less';
import echarts from "echarts";
import DomSize from 'wd-domsize-monitor';
export default class Mycharts extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.timer = 0;
    this.echartsLib = echarts;
  }
  componentDidMount(){
    this.rerenderCharts();
  }
  disposeCharts() {
    if (this.chart) {
      try {
        DomSize.remove(this.chart)
      } catch (e) {
        console.warn(e);
      }
    }
    this.myChart.dispose(this.chart);
  }
  rerenderCharts() {
    this.myChart = this.getEchartsInstance();
    this.myChart.setOption(this.props.options);
    if (this.chart) {
      DomSize.bind(this.chart, () => {
        this.myChart.resize();
      })
    }
  }
  getEchartsInstance() {
    const echartInstance = echarts.getInstanceByDom(this.chart) || echarts.init(this.chart)
    return echartInstance;
  }
  componentWillUnmount(){
    this.myChart.dispose();
  }
  render(){
    return (
      <div ref={dom => this.chart = dom} className={styles.chartsComponent}>

      </div>
    );
  }
}
