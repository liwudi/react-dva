/**
 * Created by mapbar_front on 2018/8/23.
 */
const routes = [
  {
    key: 0,
    path: '/index/index',
    models: () => [import('../models/example')],
    component: () => import('../routes/Main')
  },{
    key: 1,
    path: '/user',
    models: () => [import('../models/user')],
    component: () => import('../routes/UserPage')
  },{
    key: 2,
    path: '/login',
    models: () => [import('../models/user')],
    component: () => import('../routes/User/Login')
  },{
    key: 3,
    path: '/dashboard/index',
    models: () => [import('../models/user')],
    component: () => import('../routes/Dashboard/index')
  },{
    key: 4,
    path: '/dashboard/echart',
    models: () => [import('../models/user')],
    component: () => import('../routes/Charts/Echarts')
  },{
    key: 5,
    path: '/dashboard/hchart',
    models: () => [import('../models/user')],
    component: () => import('../routes/Charts/Hcharts')
  },{
    key: 6,
    path: '/dashboard/userlist',
    models: () => [import('../models/user')],
    component: () => import('../routes/UserManage/UserList')
  },{
    key: 7,
    path: '/dashboard/adduser',
    models: () => [import('../models/user')],
    component: () => import('../routes/UserManage/AddUser')
  }
];

const routes1 = [
  {
    key: 0,
    path: '/index/index',
    component: import('../routes/Main')
  },
  {
    key: 1,
    path: '/index/dashboard',
    component: import('../routes/Dashboard/index')
  },
  {
    key: 2,
    path: '/index/userlist',
    component: import('../routes/UserManage/UserList')
  },
  {
    key: 3,
    path: '/index/adduser',
    component: import('../routes/UserManage/AddUser')
  },
  {
    key: 4,
    path: '/index/echart',
    component: import('../routes/Charts/Echarts')
  },
  {
    key: 5,
    path: '/index/hchart',
    component: import('../routes/Charts/Hcharts')
  }
];

export default routes1;
