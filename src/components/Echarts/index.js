/**
 * Created by mapbar_front on 2018/9/18
 */
import React, { Component } from 'react';
import styles from './index.less';
import echarts from "echarts";

export default class Mycharts extends Component {
  componentDidMount(){
    this.initMyCharts();
    this.timer = 0;
    window.onresize = () => {
      this.myChart.dispose();
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.initMyCharts();
        // this.myChart.resize();
      }, 200);
    }
  }
  initMyCharts() {
    this.myChart = echarts.init(this.chart);
    this.myChart.setOption(this.props.options);
  }
  componentWillUnmount(){
    this.myChart.dispose();
    clearTimeout(this.timer);
    window.onresize = () => {};
  }
  render(){
    return (
      <div ref={dom => this.chart = dom} className={styles.chartsComponent}>

      </div>
    );
  }
}
