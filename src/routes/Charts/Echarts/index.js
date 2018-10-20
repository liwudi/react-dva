/**
 * Created by mapbar_front on 2018/9/18
 */
import React, { Component } from 'react';
import WdEchartsReact from 'wd-echarts-react';
import styles from './index.less';
import { options_bar, options_pie } from './dataSource';

export default class Echarts extends Component{
  render(){
    return (
      <div className={styles.echarts}>
        <div className={styles.chartItem}>
          {/*<MyCharts options={this.state.option}></MyCharts>*/}
          <WdEchartsReact options={options_bar}></WdEchartsReact>
        </div>
        <div className={styles.chartItem}>
          <WdEchartsReact options={options_pie}></WdEchartsReact>
        </div>
      </div>
    )
  }
}
