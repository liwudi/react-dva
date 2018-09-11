/**
 * Created by mapbar_front on 2018/7/27.
 */
import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Row, Col, Icon } from 'antd';
import Page from '../../components/Page';
import Styles from './index.less';
import { connect } from 'dva';
import echarts from 'echarts';

@connect((state)=>{
  console.log(state);
  return {
    dashboard: state.dashboard
  }
})
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        icon: 'notification',
        title: 'notification',
        number: 25,
        color: '#9ccc65'
      },{
        icon: 'message',
        title: 'message',
        number: 1278,
        color: '#ad6dd2'
      },{
        icon: 'like',
        title: 'like',
        number: 3423,
        color: '#3dbd7d'
      },{
        icon: 'dislike',
        title: 'dislike',
        number: 25,
        color: '#ef6f6f'
      }],
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
    }
  }
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(this.state.option);
  }
  componentWillReceiveProps(nextProps){
    console.log('nextProps', nextProps)
  }

  render(){
    return (
      <div className={Styles.dashboard}>
        <div className={Styles.countInfo}>
          <Row type="flex" justify="space-between">
            {
              this.state.list.map((item, index) => {
                return (
                  <Col style={{background: '#fff', marginTop: '20px'}} xs={10} lg={5}>
                    <div className={Styles.card}>
                      <div className={`${Styles.icon} center`}>
                        <Icon type={item.icon} style={{ fontSize: 50, color: item.color }} />
                      </div>
                      <div className={Styles.info}>
                        <p className={Styles.title}>{item.title}</p>
                        <CountUp start={0} end={item.number}/>
                      </div>
                    </div>
                  </Col>
                );
              })
            }
          </Row>
          <Row style={{marginTop: '20px'}}>
            <Col span={16}>
              <div style={{background:'#fff'}}>
                <div id="main" style={{height: '300px'}}>

                </div>
              </div>
            </Col>
            <Col span={8}>
              <div style={{background:'red'}}>
                我是中国人
              </div>
            </Col>
          </Row>

        </div>
      </div>
    )
  }
}
