import dva from 'dva';
import { message } from 'antd';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';
import './index.css';
import { query } from './services/example'
query().then(res => {
  console.log('res',res)
})

const log = createLogger({ collapsed: true })
// 1. Initialize
const app = dva({
  onError: function(e){
    message.error(e.message, /* duration */3);
  },
  onAction: log,
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

