var dom_saturation_allo_2 = document.getElementById('saturation_show_allo_2');
var chart_saturation_allo_2 = echarts.init(dom_saturation_allo_2, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option_saturation_allo_2;

var data_2 = [];
for (let i = 0; i < 5; ++i) {
  data_2.push(parseFloat((Math.random() * 0.1).toFixed(3)));
}

option_saturation_allo_2 = {
  left: "5%",
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['公司A', '公司B', '公司C', '公司D', '公司E'],
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
      data: data_2,
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

function run_2() {
  for (var i = 0; i < data_2.length; ++i) {
    if (Math.random() > 0.9) {
      data_2[i] += parseFloat((Math.random() * 0.01).toFixed(3));
    } else {
      data_2[i] += parseFloat((Math.random() * 0.1).toFixed(3));
    }
    data_2[i]=parseFloat(data_2[i].toFixed(3))
  }
  chart_saturation_allo_2.setOption({
    series: [
      {
        type: 'bar',
        data:data_2
      }
    ]
  });
}

setTimeout(function () {
  run_2();
}, 0);

setInterval(function () {
  run_2();
}, 3000);


if (option_saturation_allo_2 && typeof option_saturation_allo_2 === 'object') {
  chart_saturation_allo_2.setOption(option_saturation_allo_2);
}

window.addEventListener('resize', chart_saturation_allo_2.resize);