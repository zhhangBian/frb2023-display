var dom_answer_allo_2 = document.getElementById('answer_show_allo_2');
var chart_answer_allo_2 = echarts.init(dom_answer_allo_2, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option_answer_allo_2;

option_answer_allo_2 = {
  tooltip: {
    trigger: 'item',
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
      name: '相应时间占比为：',
      type: 'pie',
      radius: '50%',
      top: '0%',
      data: [
        {value: 0.423, name: '三分钟'},
        {value: 0.239, name: '五分钟'},
        {value: 0.184, name: '十分钟'},
        {value: 0.154, name: '未接单'}
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

if (option_answer_allo_2 && typeof option_answer_allo_2 === 'object') {
  chart_answer_allo_2.setOption(option_answer_allo_2);
}

window.addEventListener('resize', chart_answer_allo_2.resize);