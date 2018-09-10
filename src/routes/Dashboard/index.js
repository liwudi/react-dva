/**
 * Created by mapbar_front on 2018/7/27.
 */
import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Row, Col, Icon } from 'antd';
import Page from '../../components/Page';
import Styles from './index.less';

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
      }]
    }
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
          <Row>
            <Col>
              
            </Col>
          </Row>

        </div>
      </div>
    )
  }
}
