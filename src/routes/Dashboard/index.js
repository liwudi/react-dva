/**
 * Created by mapbar_front on 2018/7/27.
 */
import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Row, Col, Icon, List, Card } from 'antd';
import Styles from './index.less';
import { connect } from 'dva';
import echarts from 'echarts';

const data = [
  {
    title: '用户名',
    content: 'mapbar_front'
  },
  {
    title: 'github账号',
    content: 'https://github.com/liwudi'
  },
  {
    title: '个人博客',
    content: 'https://blog.csdn.net/mapbar_front'
  },
];

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
    const { weatherInfo } = this.props.dashboard;
    return (
      <div className={Styles.dashboard}>
        <Row type="flex" justify="space-between">
          {
            this.state.list.map((item, index) => {
              return (
                <Col key={index} style={{background: '#fff', marginTop: '20px'}} xs={10} lg={5}>
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
          {
            weatherInfo && <Col span={8}>
              <div className={Styles.currentWeather}>
                <h2 className="center">今日天气</h2>
                <div className={Styles.currentWeatherItem}>当前城市：{weatherInfo.data.city}</div>
                <div className={Styles.currentWeatherItem}>平均温度：{weatherInfo.data.wendu}度</div>
                <div className={Styles.currentWeatherItem}>舒适程度：{weatherInfo.data.ganmao}</div>
              </div>
            </Col>
          }
          {
            weatherInfo && <Col span={24}>
              <div className={`marginTop20 flex-box ${Styles.weatherBox}`}>

                <div className={`${Styles.weatherList} flex-box`}>
                  {weatherInfo.data.forecast.map(item => {
                    return (
                      <div key={item.date} className={`${Styles.weatherListItem} flex1`}>
                        <h2 className='center'>{item.date}</h2>
                        <div className={`${Styles.itemInfo} center`}>高温：{item.date}</div>
                        <div className={`${Styles.itemInfo} center`}>低温：{item.date}</div>
                        <div className={`${Styles.itemInfo} center`}>风向：{item.fengxiang}</div>
                        <div className={`${Styles.itemInfo} center`}>类型：{item.type}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          }

          <Col span={24}>
            <div className="marginTop20">
              <List
                grid={{gutter: 3, column: 3}}
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Card title={item.title}>{item.content || 'content'}</Card>
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
