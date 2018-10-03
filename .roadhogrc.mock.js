var fs = require('fs');
var path = require('path');
var mockjs = require('mockjs');
const Random = mockjs.Random;  //导入mock.js的随机数

const data = mockjs.mock({
  'data|100': [{
    'id|+1': 1,
    'name': () => {
      return Random.cname();
    },
    'age|18-100': 1,
    'phone': /1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,
    'avatar': () => {
      return Random.image('36x36');
    },
    'status|1-2': 1,
    'email': () => {
      return Random.email('visiondk.com');
    },
    'isadmin|0-1': 1,
    'gender|0-1': 1,
    'address': '中国北京市',
    'created_at': () => {
      return Random.datetime('yyyy-MM-dd HH:mm:ss');
    },
    'updated_at': () => {
      return Random.datetime('yyyy-MM-dd HH:mm:ss');
    },
  }],
  page: {
    total: 100,
    current: 1,
  },
});
console.log(data);
const datas = {
  'GET /api1/users': data,
}
const mock = {}
fs.readdirSync(path.join(__dirname + '/src/mock')).forEach(function(file) {
  Object.assign(mock, require('./src/mock/' + file))
})
module.exports = datas;

