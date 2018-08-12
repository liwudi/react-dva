/**
 * Created by mapbar_front on 2018/7/30.
 */
import React from 'react';
import { Route, NavLink, Router, Switch,Redirect } from 'dva/router';
import { Menu, Icon, Avatar } from 'antd';

import styles from './index.less';
const SubMenu = Menu.SubMenu;

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
          <Menu.Item key="0"><NavLink exact to="/dashboard/index"><Icon type="pie-chart" /><span>dashboard</span></NavLink></Menu.Item>

          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>User</span></span>}>
            <Menu.Item key="3">
              <NavLink to="/dashboard/userlist"><span>userList</span></NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/dashboard/adduser"><span>addUser</span></NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>Charts</span></span>}>
            <Menu.Item key="5">
              <NavLink to="/dashboard/echart"><span>echart</span></NavLink>
            </Menu.Item>
            <Menu.Item key="6">
              <NavLink to="/dashboard/hchart"><span>hchart</span></NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>Posts</span></span>}>
            <Menu.Item key="7">Option 5</Menu.Item>
            <Menu.Item key="8">Option 6</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className={`flex1`}>
        <div className={styles.header}></div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

Page.propTypes = {
};

export default Page;
