import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends Component{
  render(){
    console.log(this.props)
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
        <div>{this.props.state.count}</div>
      </div>
    )
  }
}

IndexPage.propTypes = {
};

export default connect(function (state) {
  return {
    state: state.example
  }
})(IndexPage);
