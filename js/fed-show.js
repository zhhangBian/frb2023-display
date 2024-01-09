var dom = document.getElementById('fed-show');
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
        { value: 1048, name: '滴滴' },
        { value: 735, name: '神州出行' },
        { value: 580, name: '高德打车' },
        { value: 484, name: 'T3出行' },
        { value: 300, name: '其他' }
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