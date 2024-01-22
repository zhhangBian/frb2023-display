var dom_saturation_allo_1 = document.getElementById('saturation_show_allo_1');
var chart_saturation_allo_1 = echarts.init(dom_saturation_allo_1, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option_saturation_allo_1;

var data_1 = [];
for (let i = 0; i < 5; ++i) {
  data_1.push(parseFloat((Math.random() * 0.1).toFixed(4)));
}

option_saturation_allo_1 = {
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
      data: data_1,
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

function run_1() {
  for (var i = 0; i < data_1.length; ++i) {
    if (Math.random() > 0.9) {
      data_1[i] += parseFloat((Math.random() * 0.01).toFixed(4));
    } else {
      data_1[i] += parseFloat((Math.random() * 0.1).toFixed(4));
    }
    data_1[i]=parseFloat(data_1[i].toFixed(4))
  }
  chart_saturation_allo_1.setOption({
    series: [
      {
        type: 'bar',
        data:data_1
      }
    ]
  });
}

setTimeout(function () {
  run_1();
}, 0);

setInterval(function () {
  run_1();
}, 3000);


if (option_saturation_allo_1 && typeof option_saturation_allo_1 === 'object') {
  chart_saturation_allo_1.setOption(option_saturation_allo_1);
}

window.addEventListener('resize', chart_saturation_allo_1.resize);