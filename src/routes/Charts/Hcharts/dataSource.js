/**
 * Created by mapbar_front on 2018/10/7
 */
export const options = {
  chart: {
    type: 'bar',
  },
  title: {
    text: '我的第一个图表',
  },
  xAxis: {
    categories: ['苹果', '香蕉', '橙子'],
  },
  yAxis: {
    title: {
      text: '吃水果个数',
    }
  },
  series: [{
    name: '小明',
    data: [1, 0, 4],
  }, {
    name: '小红',
    data: [5, 7, 3],
  }]
};

export const options_BrokenLine = {
  title: {
    text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
  },
  subtitle: {
    text: '数据来源：thesolarfoundation.com'
  },
  yAxis: {
    title: {
      text: '就业人数'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },
  series: [{
    name: '安装，实施人员',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: '工人',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: '销售',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: '项目开发',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: '其他',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
}

export const options_Bar = {
  chart: {
    type: 'column'
  },
  title: {
    text: '2015年1月-5月，各浏览器的市场份额'
  },
  subtitle: {
    text: '点击可查看具体的版本数据，数据来源: <a href="https://netmarketshare.com">netmarketshare.com</a>.'
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: '总的市场份额'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  series: [{
    name: '浏览器品牌',
    colorByPoint: true,
    data: [{
      name: 'Microsoft Internet Explorer',
      y: 56.33,
      drilldown: 'Microsoft Internet Explorer'
    }, {
      name: 'Chrome',
      y: 24.03,
      drilldown: 'Chrome'
    }, {
      name: 'Firefox',
      y: 10.38,
      drilldown: 'Firefox'
    }, {
      name: 'Safari',
      y: 4.77,
      drilldown: 'Safari'
    }, {
      name: 'Opera',
      y: 0.91,
      drilldown: 'Opera'
    }, {
      name: 'Proprietary or Undetectable',
      y: 0.2,
      drilldown: null
    }]
  }],
  drilldown: {
    series: [{
      name: 'Microsoft Internet Explorer',
      id: 'Microsoft Internet Explorer',
      data: [
        [
          'v11.0',
          24.13
        ],
        [
          'v8.0',
          17.2
        ],
        [
          'v9.0',
          8.11
        ],
        [
          'v10.0',
          5.33
        ],
        [
          'v6.0',
          1.06
        ],
        [
          'v7.0',
          0.5
        ]
      ]
    }, {
      name: 'Chrome',
      id: 'Chrome',
      data: [
        [
          'v40.0',
          5
        ],
        [
          'v41.0',
          4.32
        ],
        [
          'v42.0',
          3.68
        ],
        [
          'v39.0',
          2.96
        ],
        [
          'v36.0',
          2.53
        ],
        [
          'v43.0',
          1.45
        ],
        [
          'v31.0',
          1.24
        ],
        [
          'v35.0',
          0.85
        ],
        [
          'v38.0',
          0.6
        ],
        [
          'v32.0',
          0.55
        ],
        [
          'v37.0',
          0.38
        ],
        [
          'v33.0',
          0.19
        ],
        [
          'v34.0',
          0.14
        ],
        [
          'v30.0',
          0.14
        ]
      ]
    }, {
      name: 'Firefox',
      id: 'Firefox',
      data: [
        [
          'v35',
          2.76
        ],
        [
          'v36',
          2.32
        ],
        [
          'v37',
          2.31
        ],
        [
          'v34',
          1.27
        ],
        [
          'v38',
          1.02
        ],
        [
          'v31',
          0.33
        ],
        [
          'v33',
          0.22
        ],
        [
          'v32',
          0.15
        ]
      ]
    }, {
      name: 'Safari',
      id: 'Safari',
      data: [
        [
          'v8.0',
          2.56
        ],
        [
          'v7.1',
          0.77
        ],
        [
          'v5.1',
          0.42
        ],
        [
          'v5.0',
          0.3
        ],
        [
          'v6.1',
          0.29
        ],
        [
          'v7.0',
          0.26
        ],
        [
          'v6.2',
          0.17
        ]
      ]
    }, {
      name: 'Opera',
      id: 'Opera',
      data: [
        [
          'v12.x',
          0.34
        ],
        [
          'v28',
          0.24
        ],
        [
          'v27',
          0.17
        ],
        [
          'v29',
          0.16
        ]
      ]
    }]
  }
};
