/**
 * Created by mapbar_front on 2018/7/10.
 */
import React, { Component } from 'react';
import { connect } from 'dva';

class UserPage extends Component{
  render(){
    return (
      <div>
        <h1>User Info</h1>
        <h3>username: {this.props.user.username}</h3>
      </div>
    )
  }
}

export default connect(function (state) {
  return {
    user: state.user
  }
})(UserPage);
