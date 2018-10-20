/**
 * Created by mapbar_front on 2018/8/23.
 */
import React, { Component } from 'react';
import Page from '../components/Page';

import dynamicFn from '../utils/dynamic';

import { Router, Route, Switch, Redirect } from 'dva/router';
import routes from '../common/router';

export default class MainLayout extends Component{
  render(){
    return (
      <Page>
        <Router history={this.props.history}>
          <Switch>
            {
              routes.map((item) => {
                return (
                  <Route key={item.key} path={item.path} component={dynamicFn(() => item.component)} />
                );
              })
            }
            <Redirect from="/index" to="/index/dashboard" />
          </Switch>
        </Router>
      </Page>
    );
  }
}
