/**
 * Created by mapbar_front on 2018/7/30.
 */
import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';
import { columns } from './UserConfig';

class UserList extends Component{
  render(){
    const { data }= this.props.user.users;
    return (
      <div style={{ margin: '20px', background: '#fff' }}>
        <Table dataSource={data} columns={columns} />
      </div>
    )
  }
}

export default connect((state) => {
  return {
    user: state.user
  }
})(UserList);
