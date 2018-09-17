import dva from 'dva';
import { message } from 'antd';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';
import './themes/commonStyle.less';

const log = createLogger({ collapsed: true })
// 1. Initialize
const app = dva({
  onError: function(e){
    message.error(e.message, /* duration */3);
  },
});
console.log(app._store);

// 2. Plugins
app.use(createLoading({effects: true}));

// 3. Model
app.model(require('./models/app').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

window.app = app;
/**
 * @todo: 1,检测fetch是否支持Mockjs
 * @todo: 2,携带参数的Mock的使用
 * @todo: 3,使用单个文件的方式，访问Mock数据
 */
