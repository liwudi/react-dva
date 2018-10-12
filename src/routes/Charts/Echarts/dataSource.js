/**
 * Created by mapbar_front on 2018/10/12
 */
export const options_bar = {
  title: {
    text: '用户访问趋势图'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
};

export const options_pie = {
  series : [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      data:[
        {value:235, name:'视频广告'},
        {value:274, name:'联盟广告'},
        {value:310, name:'邮件营销'},
        {value:335, name:'直接访问'},
        {value:400, name:'搜索引擎'}
      ]
    }
  ]
}

