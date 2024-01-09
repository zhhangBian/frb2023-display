var dom = document.getElementById('saturation');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

const data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}
option = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['滴滴', '智慧出行', '飞马出行', 'T3出行', '打车'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 3
  },
  series: [
    {
      realtimeSort: true,
      name: '各公司饱和度',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};

function run() {
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
  myChart.setOption({
    series: [
      {
        type: 'bar',
        data
      }
    ]
  });
}

setTimeout(function () {
  run();
}, 0);

setInterval(function () {
  run();
}, 3000);


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);