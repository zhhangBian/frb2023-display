var dom_place_dis = document.getElementById('place-show-dis');

var chart_place_dis = echarts.init(dom_place_dis, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option_place_dis;

option_place_dis = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    type: "scroll",
    top: "4%",
    data: ['公司A', '公司B', '公司C', '公司D', '其他'],
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
      name: '公司A',
      type: 'line',
      stack: 'Total',
      data: [243, 446, 537, 145, 545, 553, 193]
    },
    {
      name: '公司B',
      type: 'line',
      stack: 'Total',
      data: [351, 509, 108, 232, 583, 112, 300]
    },
    {
      name: '公司C',
      type: 'line',
      stack: 'Total',
      data: [501, 178, 159, 403, 184, 404, 497]
    },
    {
      name: '公司D',
      type: 'line',
      stack: 'Total',
      data: [545, 358, 302, 396, 233, 241, 170]
    },
    {
      name: '其他',
      type: 'line',
      stack: 'Total',
      data: [333, 444, 167, 593, 540, 385, 236]
    }
  ]
};


if (option_place_dis && typeof option_place_dis === 'object') {
  chart_place_dis.setOption(option_place_dis);
}

window.addEventListener('resize', chart_place_dis.resize);