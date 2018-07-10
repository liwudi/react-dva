import dva from 'dva';
import './index.css';
import { query } from './services/example'
query().then(res => {
  console.log('res',res)
})

// 1. Initialize
const app = dva();
console.log(app._store);

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/app').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

