var dom = document.getElementById('time-chart');
var myChart1 = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '60%',
      orient: 'vertical',
      top: '30%',
      data: [
        { value: 1048, name: '三分钟' },
        { value: 735, name: '五分钟' },
        { value: 580, name: '十分钟' },
        { value: 484, name: '未接单' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

if (option && typeof option === 'object') {
  myChart1.setOption(option);
}

window.addEventListener('resize', myChart1.resize);var dom = document.getElementById('rate-show');
var myChart1 = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '60%',
      orient: 'vertical',
      top: '30%',
      data: [
        { value: 1048, name: '三分钟' },
        { value: 735, name: '五分钟' },
        { value: 580, name: '十分钟' },
        { value: 484, name: '未接单' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

if (option && typeof option === 'object') {
  myChart1.setOption(option);
}

window.addEventListener('resize', myChart1.resize);