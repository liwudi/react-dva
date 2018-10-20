import React from "react";

/**
 * Created by mapbar_front on 2018/10/4
 */
const columns = [{
  title: 'Avatar',
  dataIndex: 'avatar',
  key: 'avatar',
  render: text => <img alt={'user image'} src={text}></img>
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender',
}, {
  title: 'Phone',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];

export {
  columns,
}
