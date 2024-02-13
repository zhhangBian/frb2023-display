var dom_percent_dis = document.getElementById('percent-show-dis');

var chart_percent_dis = echarts.init(dom_percent_dis, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option_percent_dis;

option_percent_dis = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        show: false,
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
                {value: 0.333, name: '公司A'},
                {value: 0.234, name: '公司B'},
                {value: 0.184, name: '公司C'},
                {value: 0.154, name: '公司D'},
                {value: 0.095, name: '其他'}
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

if (option_percent_dis && typeof option_percent_dis === 'object') {
    chart_percent_dis.setOption(option_percent_dis);
}

window.addEventListener('resize', chart_percent_dis.resize);