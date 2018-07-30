/**
 * Created by mapbar_front on 2018/7/27.
 */
import React, { Component } from 'react';
import { Route, NavLink, Router, Switch,Redirect } from 'dva/router';
import { dynamic } from 'dva/dynamic'
import Dashboard from '../Dashboard';
import styles from './index.less';
const routes = [{
  path: '/index/dashboard',
  models: () => [
    import('../../models/user.js'),
  ],
  component: () => import('../Dashboard/index.js'),
}]
export default class Main extends Component {
  render(){
    return (

        <div className="wrapper flex-box">
          <div className={styles.nav}>
            <ul>
              <li><NavLink to="/index/dashboard">dashboard</NavLink></li>
            </ul>
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
                <Route path="/index/dashboard" component={Dashboard}/>
                <Redirect from='/index' to='/index/dashboard'/>
              </Switch>
            </div>
          </div>
        </div>

    );
  }
}
