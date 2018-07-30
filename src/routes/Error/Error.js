/**
 * Created by mapbar_front on 2018/7/10.
 */
import React, { Component } from 'react';
import styles from './error.less';
export default class Error extends Component{
  render(){
    return (
      <div className={`${styles.pageStyle} center wrapper`}>
        Page is not found!
      </div>
    )
  }
}
