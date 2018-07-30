/**
 * Created by mapbar_front on 2018/7/27.
 */
import React, { Component } from 'react';
import { Route, NavLink, Router, Switch,Redirect } from 'dva/router';
import { Menu, Icon, Avatar } from 'antd'
import { dynamic } from 'dva/dynamic'

import Dashboard from '../Dashboard';

import UserList from '../UserManage/UserList';
import AddUser from '../UserManage/AddUser';

import Echats from '../Charts/Echarts';
import Hcharts from '../Charts/Hcharts';
import styles from './index.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const routes = [{
  path: '/index/dashboard',
  models: () => [
    import('../../models/user.js'),
  ],
  component: () => import('../Dashboard/index.js'),
}];
const routes1 = [{
  path: '/index/dashboard',
  component: Dashboard,
},{
  path: '/index/echart',
  component: Echats,
},{
  path: '/index/hchart',
  component: Hcharts,
},{
  path: '/index/adduser',
  component: AddUser,
},{
  path: '/index/userlist',
  component: UserList,
}]
export default class Main extends Component {
  render(){
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
              <Menu.Item key="0"><NavLink to="/index/dashboard"><Icon type="pie-chart" /><span>dashboard</span></NavLink></Menu.Item>

              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>User</span></span>}>
                <Menu.Item key="3">
                  <NavLink to="/index/userlist"><span>userList</span></NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                  <NavLink to="/index/adduser"><span>addUser</span></NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>Charts</span></span>}>
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
          <div className={`flex1`}>
            <div className={styles.header}></div>
            <div>
              <Switch>
                {/*{*/}
                  {/*routes.map((item) => {*/}
                    {/*return (*/}
                      {/*<Route path={item.path} component={dynamic({*/}
                        {/*app: window.app,*/}
                        {/*models: item.models,*/}
                        {/*component: item.component,*/}
                      {/*})}/>*/}
                    {/*)*/}
                  {/*})*/}
                {/*}*/}
                {
                  routes1.map((item, index) => {
                    return (
                      <Route key={index} path={item.path} component={item.component}></Route>
                    )
                  })
                }
                <Redirect from='/index' to='/index/dashboard'/>
              </Switch>
            </div>
          </div>
        </div>

    );
  }
}
