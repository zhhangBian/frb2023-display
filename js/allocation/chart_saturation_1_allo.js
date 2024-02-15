document.addEventListener("DOMContentLoaded", function () {
    var dom_saturation_allo_1 = document.getElementById('saturation_show_allo_1');
    var chart_saturation_allo_1 = echarts.init(dom_saturation_allo_1, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });

    var data_1 = [];
    data_1[0] = 0;
    data_1[1] = 0;
    data_1[2] = 0;
    data_1[3] = 0;
    data_1[4] = 0;

    var option_saturation_allo_1 = {
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
        animationDurationUpdate: 10,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',

        pageTextStyle: {
            color: "rgba(255, 255, 255, 1)",
        }
    };

    var t;

    function setData_1() {
        t = time / timeMax;

        data_1[0] = parseFloat(Math.abs(6.927 * t * t * t * t - 11.9992 * t * t * t + 4.935 * t * t + 0.462 * t + 0.0465).toFixed(3));
        data_1[1] = parseFloat(Math.abs(-18.880 * t * t * t * t + 45.697 * t * t * t - 37.544 * t * t + 11.762 * t - 0.7239).toFixed(3));
        data_1[2] = parseFloat(Math.abs(10.885 * t * t * t * t - 29.0208 * t * t * t + 25.714 * t * t - 8.429 * t + 0.887).toFixed(3));
        data_1[3] = parseFloat(Math.abs(8.880 * t * t * t * t - 20.802 * t * t * t + 17.257 * t * t - 5.845 * t + 0.726).toFixed(3));
        data_1[4] = parseFloat(Math.abs(-13.229 * t * t * t * t + 30.916 * t * t * t - 24.433 * t * t + 7.190 * t - 0.2315).toFixed(3));

        chart_saturation_allo_1.setOption({
            series: [
                {
                    type: 'bar',
                    data: data_1
                }
            ]
        });
    }

    if (option_saturation_allo_1 && typeof option_saturation_allo_1 === 'object') {
        chart_saturation_allo_1.setOption(option_saturation_allo_1);
    }

    window.addEventListener('resize', chart_saturation_allo_1.resize);

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
        setData_1();

        if (option_saturation_allo_1 && typeof option_saturation_allo_1 === 'object') {
            chart_saturation_allo_1.setOption(option_saturation_allo_1);
        }

        window.addEventListener('resize', chart_saturation_allo_1.resize);
    }, 10);

});