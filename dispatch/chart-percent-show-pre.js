var dom_percent_pre = document.getElementById('percent-show-dis');

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
    data: ['A公司', 'B公司', 'C公司', 'C公司', 'D公司'],
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
  label: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 14,
    bleedMargin: 2,
  },
  labelLine: {
    show: true,
    smooth: true,
  },
  series: [
    {
      name: '联邦贡献比率为：',
      type: 'pie',
      radius: '60%',
      orient: 'vertical',
      top: '0%',
      data: [
        { value: 0.333, name: 'A公司' },
        { value: 0.234, name: 'B公司' },
        { value: 0.184, name: 'C公司' },
        { value: 0.154, name: 'C公司' },
        { value: 0.095, name: 'D公司' }
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