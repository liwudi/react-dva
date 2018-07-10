import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'

import Error from './routes/Error/Error'

function RouterConfig({ history, app }) {
  const routes = [
    {
      key: 0,
      path: '/index',
      models: () => [import('./models/example')],
      component: () => import('./routes/IndexPage')
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
    }
  ];
  return (
    <Router class='wrap' history={history}>
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
    </Router>
  );
}

export default RouterConfig;
