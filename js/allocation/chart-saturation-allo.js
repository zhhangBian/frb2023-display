var dom_saturation_allo = document.getElementById('saturation-show-allo');
var chart_saturation_allo = echarts.init(dom_saturation_allo, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option_saturation_allo;

const data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.random() * 0.1);
}

option_saturation_allo = {
  left: "5%",
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['滴滴', '智慧', '飞马', 'T3', '高德'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 3,
    axisLabel: {
      color: "rgba(255, 255, 255, 1)",
      fontWeight: "bold",
      //inside: true,
      align: "right",
      width: 100,
    },
    
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
        valueAnimation: true,
        color: 'white',
        fontWeight: "bold",
      }
    }
  ],
  legend: {
    show: false
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear',

  pageTextStyle: {
    color: "rgba(255, 255, 255, 1)",
  }
};

function run() {
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.random() * 0.01;
    } else {
      data[i] += Math.random() * 0.1;
    }
  }
  chart_saturation_allo.setOption({
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


if (option_saturation_allo && typeof option_saturation_allo === 'object') {
  chart_saturation_allo.setOption(option_saturation_allo);
}

window.addEventListener('resize', chart_saturation_allo.resize);