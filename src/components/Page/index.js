/**
 * Created by mapbar_front on 2018/7/30.
 */
import React from 'react';
import { Route, NavLink, Router, Switch,Redirect } from 'dva/router';
import { Menu, Icon, Avatar, Dropdown } from 'antd';

import styles from './index.less';
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item key="0">
      个人中心
    </Menu.Item>
    <Menu.Item key="1">
      我的订单
    </Menu.Item>
    <Menu.Item key="3">
      退出登陆
    </Menu.Item>
  </Menu>
);

const Page = (props) => {
  return (
    <div className="wrapper flex-box">
      <div className={styles.nav}>
        <div className={`${styles.avatar} center`}>
          <Avatar size="large" icon="user" />
        </div>
        <Menu
          onClick={this.handleClick}
          style={{ width: 200 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.Item key="0"><NavLink exact to="/index/dashboard"><Icon type="dashboard" theme="outlined" /><span>dashboard</span></NavLink></Menu.Item>

          <SubMenu key="sub2" title={<span><Icon type="user" theme="Filled" /><span>User</span></span>}>
            <Menu.Item key="3">
              <NavLink to="/index/userlist"><span>userList</span></NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/index/adduser"><span>addUser</span></NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="area-chart" theme="Filled" /><span>Charts</span></span>}>
            <Menu.Item key="5">
              <NavLink to="/index/echart"><span>echart</span></NavLink>
            </Menu.Item>
            <Menu.Item key="6">
              <NavLink to="/index/hchart"><span>hchart</span></NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>Posts</span></span>}>
            <Menu.Item key="7">Option 5</Menu.Item>
            <Menu.Item key="8">Option 6</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className={`flex1 flex-box flex-col`}>
        <div className={`${styles.header}`}>
          <div className={`${styles.loginStatus} center`}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
                Click me <Icon type="down" />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className={`${styles.content} flex1`}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

Page.propTypes = {
};

export default Page;
