var dom_data_pre = document.getElementById('data-show-dis');

var chart_data_pre = echarts.init(dom_data_pre, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option_data_pre;

option_data_pre = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
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
  grid: {
    left: '3%',
    right: '5%',
    bottom: '8%',
    containLabel: true
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['14:00', '14:10', '14:20', '14:30', '14:50', '15:00', '15:10']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'A公司',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'B公司',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'C公司',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'C公司',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'D公司',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};


if (option_data_pre && typeof option_data_pre === 'object') {
  chart_data_pre.setOption(option_data_pre);
}

window.addEventListener('resize', chart_data_pre.resize);