import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'

import Error from './routes/Error/Error';
import Page from './components/Page';

function RouterConfig({ history, app }) {
  const layoutRoutes = [
    {
      key: 0,
      path: '/login',
      models: () => [import('./models/user')],
      component: () => import('./routes/User/Login')
    },
    {
      key: 1,
      path: '/index',
      models: () => [import('./models/user')],
      component: () => import('./layout/MainLayout')
    }
  ];
  return (
    <Router class='wrapper' history={history}>
      <Switch>
        <Route path="/" exact render={() => (<Redirect to='/login' />)} />
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
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
