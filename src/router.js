import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'

import Error from './routes/Error/Error';
import Page from './components/Page';
const layoutRoutes = [
  {
    key: 0,
    path: '/login',
    models: () => [import('./models/user'), import('./models/dashboard')],
    component: () => import('./routes/User/Login')
  },
  {
    key: 1,
    path: '/index',
    models: () => [import('./models/user'), import('./models/dashboard'), import('./models/hcharts')],
    component: () => import('./layout/MainLayout')
  }
];

function RouterConfig({ history, app }) {
  return (
    <Router class='wrapper' history={history}>
      <Switch>
        {
          layoutRoutes.map(({path, key, ...dynamics}) => {
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
        <Route path="/" exact render={() => (<Redirect to='/login' />)} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
