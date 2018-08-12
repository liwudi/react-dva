import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'

import Error from './routes/Error/Error';
import Page from './components/Page';

function RouterConfig({ history, app }) {
  const routes = [
    {
      key: 0,
      path: '/index',
      models: () => [import('./models/example')],
      component: () => import('./routes/Main')
    },{
      key: 1,
      path: '/user',
      models: () => [import('./models/user')],
      component: () => import('./routes/UserPage')
    },{
      key: 2,
      path: '/login',
      models: () => [import('./models/user')],
      component: () => import('./routes/User/Login')
    },{
      key: 3,
      path: '/dashboard/index',
      models: () => [import('./models/user')],
      component: () => import('./routes/Dashboard/index')
    },{
      key: 4,
      path: '/dashboard/echart',
      models: () => [import('./models/user')],
      component: () => import('./routes/Charts/Echarts')
    },{
      key: 5,
      path: '/dashboard/hchart',
      models: () => [import('./models/user')],
      component: () => import('./routes/Charts/Hcharts')
    },{
      key: 6,
      path: '/dashboard/userlist',
      models: () => [import('./models/user')],
      component: () => import('./routes/UserManage/UserList')
    },{
      key: 7,
      path: '/dashboard/adduser',
      models: () => [import('./models/user')],
      component: () => import('./routes/UserManage/AddUser')
    }
  ];
  return (
    <Router class='wrapper' history={history}>
      <Page>
      <Switch>
        <Route path="/" exact render={() => (<Redirect to='/login' />)} />
        {
          routes.map(({path, key, ...dynamics}) => {
            return (
              <Route
                key={key}
                path={path}
                component={dynamic({
                  app,
                  ...dynamics
                })}
              />
            )
          })
        }
        <Route component={Error} />
      </Switch>
      </Page>
    </Router>
  );
}

export default RouterConfig;
