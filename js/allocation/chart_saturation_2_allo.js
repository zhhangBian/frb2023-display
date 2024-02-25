document.addEventListener("DOMContentLoaded", function () {
    const dom_saturation_allo_2 = document.getElementById('saturation_show_allo_2');
    const chart_saturation_allo_2 = echarts.init(dom_saturation_allo_2, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });

    var data_2 = [];
    data_2[0] = 0;
    data_2[1] = 0;
    data_2[2] = 0;
    data_2[3] = 0;
    data_2[4] = 0;

    var option_saturation_allo_2 = {
        grid: {
          left: "15%",
        },
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
                align: "right",
            }
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

        width: "70%",

        animationDuration: 0,
        animationDurationUpdate: 10,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',

        pageTextStyle: {
            color: "rgba(255, 255, 255, 1)",
        }
    };

    var t;
    function setData_2() {
        t = time / timeMax;

        data_2[0] = parseFloat(Math.abs(-100.347 * t * t * t * t * t + 240.080 * t * t * t * t - 197.172 * t * t * t + 63.664 * t * t - 6.352 * t + 0.622).toFixed(3));
        data_2[1] = parseFloat(Math.abs(-93.959 * t * t * t * t * t + 232.920 * t * t * t * t - 203.858 * t * t * t + 75.110 * t * t - 10.536 * t + 0.873).toFixed(3));
        data_2[2] = parseFloat(Math.abs(-27.476 * t * t * t * t * t + 64.772 * t * t * t * t - 54.272 * t * t * t + 19.838 * t * t - 3.001 * t + 0.762).toFixed(3));
        data_2[3] = parseFloat(Math.abs(-19.693 * t * t * t * t * t + 63.169 * t * t * t * t - 73.905 * t * t * t + 36.984 * t * t - 6.785 * t + 0.812).toFixed(3));
        data_2[4] = parseFloat(Math.abs(-6.55 * t * t * t * t * t + 32.910 * t * t * t * t - 48.432 * t * t * t + 26.475 * t * t - 4.518 * t + 0.683).toFixed(3));

        chart_saturation_allo_2.setOption({
            series: [
                {
                    type: 'bar',
                    data: data_2
                }
            ]
        });
    }

    if (option_saturation_allo_2 && typeof option_saturation_allo_2 === 'object') {
        chart_saturation_allo_2.setOption(option_saturation_allo_2);
    }

    window.addEventListener('resize', chart_saturation_allo_2.resize);

    function timeSet() {
        time = Date.now() - timeBegin;

        if (time > timeMax) {
            currentTime = 0;
            timeBegin = Date.now();
            time = 0;
        }
        progressBar.value = time;
    }

    setInterval(function () {
        timeSet();
        setData_2();

        if (option_saturation_allo_2 && typeof option_saturation_allo_2 === 'object') {
            chart_saturation_allo_2.setOption(option_saturation_allo_2);
        }

        window.addEventListener('resize', chart_saturation_allo_2.resize);
    }, 10);
});