var dom_percent_pre = document.getElementById('percent-show-pre');

var chart_percent_pre = echarts.init(dom_percent_pre, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option_percent_pre;

option_percent_pre = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show: false,
    type: "scroll",
    top: "4%",
    data: ['滴滴', '神州出行', '高德打车', 'T3出行', '其他'],
    textStyle: {
      color: "rgba(255, 255, 255, 1)",
      // fontWeight: "bold",

    },
    inactiveColor: {
      color: "rgba(119, 136, 153, 0.5)",
    },
    pageIconColor: "rgba(21, 112, 174, 1)",
    pageTextStyle: {
      color: "rgba(255, 255, 255, 1)",
    }
  },
  series: [
    {
      name: '联邦贡献比率为：',
      type: 'pie',
      radius: '70%',
      orient: 'vertical',
      top: '0%',
      data: [
        { value: 0.333, name: '滴滴打车' },
        { value: 0.234, name: '神州出行' },
        { value: 0.184, name: '高德打车' },
        { value: 0.154, name: 'T3出行' },
        { value: 0.095, name: '其他' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(255, 255, 255, 0.5)',
        },
      },
    }
  ]
};

if (option_percent_pre && typeof option_percent_pre === 'object') {
  chart_percent_pre.setOption(option_percent_pre);
}

window.addEventListener('resize', chart_percent_pre.resize);