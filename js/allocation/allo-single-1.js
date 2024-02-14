document.addEventListener("DOMContentLoaded", function () {

    var timeBegin = Date.now(), time;
    const timeMax = 60000;

    const canvas1 = document.getElementById('canvas1');
    const painter1 = canvas1.getContext('2d');

    canvas1.width = canvas1.offsetWidth;
    canvas1.height = canvas1.offsetHeight;
    const divWidth1 = canvas1.offsetWidth;
    const divHeight1 = canvas1.offsetHeight;

    const tb_101 = 4949, te_101 = 36739;
    const tb_102 = 2546, te_102 = 51318;
    const tb_103 = 4001, te_103 = 45953;
    const tb_104 = 3709, te_104 = 21068;
    const tb_105 = 5481, te_105 = 25174;
    const tb_106 = 2004, te_106 = 56724;
    const tb_107 = 141, te_107 = 32234;
    const tb_108 = 455, te_108 = 51422;
    const tb_109 = 5878, te_109 = 48514;
    const tb_110 = 630, te_110 = 24674;
    const tb_111 = 757, te_111 = 42599;
    const tb_112 = 5416, te_112 = 21622;
    const tb_113 = 3039, te_113 = 55290;
    const tb_114 = 27, te_114 = 33154;
    const tb_115 = 5177, te_115 = 32522;
    const tb_116 = 5102, te_116 = 40883;
    const tb_117 = 4900, te_117 = 53934;
    const tb_118 = 3282, te_118 = 52074;
    const tb_119 = 5605, te_119 = 37863;
    const tb_120 = 670, te_120 = 47339;
    const tb_121 = 3457, te_121 = 58230;
    const tb_122 = 5948, te_122 = 29776;
    const tb_123 = 5973, te_123 = 40562;
    const tb_124 = 397, te_124 = 56002;
    const tb_125 = 2180, te_125 = 40226;
    const tb_126 = 1308, te_126 = 54779;
    const tb_127 = 4454, te_127 = 40699;
    const tb_128 = 4794, te_128 = 46885;
    const tb_129 = 5003, te_129 = 41156;
    const tb_130 = 475, te_130 = 31517;

    const tb_191 = 17030;
    const tb_192 = 11216;
    const tb_193 = 18399;

    const progressBar = document.getElementById('timeControl-allocation');
// 添加事件监听器以允许手动控制进度条
    progressBar.addEventListener('input', function () {
        currentTime = parseInt(progressBar.value);
        timeBegin = Date.now() - currentTime;
        time = currentTime;
    });

    function drawCurve(beginX, beginY, ctrlX, ctrlY, endX, endY) {
        painter1.beginPath();
        painter1.moveTo(beginX * divWidth1, beginY * divHeight1);
        painter1.quadraticCurveTo(ctrlX * divWidth1, ctrlY * divHeight1, endX * divWidth1, endY * divHeight1);
        painter1.strokeStyle = "#8B658B";
        painter1.lineWidth = 2;
        painter1.stroke();
    }

    function getX(t, beginX, beginY, ctrlX, ctrlY, endX, endYY) {
        return (1 - t) * (1 - t) * beginX * divWidth1 + 2 * (1 - t) * t * ctrlX * divWidth1 + t * t * endX * divHeight1;
    }

    function getY(t, beginX, beginY, ctrlX, ctrlY, endX, endY) {
        return (1 - t) * (1 - t) * beginY * divHeight1 + 2 * (1 - t) * t * ctrlY * divHeight1 + t * t * endY * divHeight1;
    }

    function setDot(timeBegin, timeEnd, beginX, beginY, ctrlX, ctrlY, endX, endY) {
        var t = (time - timeBegin) / (timeEnd - timeBegin);
        var x, y;

        if (time < timeBegin) {
            painter1.fillStyle = "#FF7F00";
            x = beginX * divWidth1;
            y = beginY * divHeight1;
        } else if (time >= timeBegin && time <= timeEnd) {
            drawCurve(beginX, beginY, ctrlX, ctrlY, endX, endY);
            painter1.fillStyle = "#00FF00";
            x = getX(t, beginX, beginY, ctrlX, ctrlY, endX, endY);
            y = getY(t, beginX, beginY, ctrlX, ctrlY, endX, endY);
        } else if (time > timeEnd && time <= timeEnd + 1000) {
            painter1.fillStyle = "#F0F8FF	";
            x = endX * divWidth1;
            y = endY * divHeight1;
        }

        painter1.beginPath();
        painter1.arc(x, y, 5, 0, 2 * Math.PI);
        painter1.fill();
    }

    function setDotMarkSin(timeBegin, beginX, beginY, label) {
        if (time < timeBegin) {
            painter1.fillStyle = "#FF7F00";
        } else {
            if (time % 1000 >= 500)
                painter1.fillStyle = "#FF0000";
            else
                painter1.fillStyle = "#FFFFFF";
        }
        painter1.beginPath();
        painter1.arc(beginX * divWidth1, beginY * divHeight1, 9, 0, 2 * Math.PI);
        painter1.fill();

        painter1.fillStyle = "#FF0000"; // 设置文本颜色
        painter1.font = "bold 20px Arial"; // 设置文本字体和大小
        painter1.fillText(label, beginX * divWidth1 - 10, beginY * divHeight1 - 10);
    }

    function set1() {
        painter1.clearRect(0, 0, divWidth1, divHeight1);
        //console.log(divWidth1,divHeight1);
        setDot(tb_101, te_101, 0.82, 0.59, 0.29, 0.78, 0.57, 0.29);
        setDot(tb_102, te_102, 0.48, 0.89, 0.12, 0.62, 0.63, 0.96);
        setDot(tb_103, te_103, 0.45, 0.15, 0.82, 0.96, 0.12, 0.44);
        setDot(tb_104, te_104, 0.42, 0.33, 0.55, 0.10, 0.62, 0.98);
        setDot(tb_105, te_105, 0.12, 0.24, 0.03, 0.47, 0.63, 0.38);
        setDot(tb_106, te_106, 0.19, 0.23, 0.73, 0.86, 0.18, 0.07);
        setDot(tb_107, te_107, 0.32, 0.90, 0.75, 0.31, 0.54, 0.05);
        setDot(tb_108, te_108, 0.71, 0.81, 0.64, 0.80, 0.84, 0.62);
        setDot(tb_109, te_109, 0.60, 0.01, 0.66, 0.78, 0.61, 0.81);
        setDot(tb_110, te_110, 0.85, 0.08, 0.71, 0.20, 0.75, 0.63);
        setDot(tb_111, te_111, 0.57, 0.29, 0.83, 0.91, 0.24, 0.32);
        setDot(tb_112, te_112, 0.69, 0.97, 0.35, 0.27, 0.39, 0.32);
        setDot(tb_113, te_113, 0.34, 0.05, 0.37, 0.80, 0.83, 0.37);
        setDot(tb_114, te_114, 0.66, 0.25, 0.21, 0.43, 0.94, 0.53);
        setDot(tb_115, te_115, 0.34, 0.82, 0.78, 0.29, 0.74, 0.99);
        setDot(tb_116, te_116, 0.53, 0.44, 0.58, 0.74, 0.31, 0.20);
        setDot(tb_117, te_117, 0.63, 0.72, 0.40, 0.67, 0.44, 0.42);
        setDot(tb_118, te_118, 0.11, 0.18, 0.46, 0.37, 0.64, 0.80);
        setDot(tb_119, te_119, 0.74, 0.74, 0.43, 0.28, 0.76, 0.11);
        setDot(tb_120, te_120, 0.76, 0.59, 0.93, 0.39, 0.18, 0.73);
        setDot(tb_121, te_121, 0.29, 0.20, 0.50, 0.96, 0.55, 0.74);
        setDot(tb_122, te_122, 0.18, 0.99, 0.67, 0.37, 0.27, 0.16);
        setDot(tb_123, te_123, 0.00, 0.63, 0.78, 0.51, 0.08, 0.44);
        setDot(tb_124, te_124, 0.24, 0.96, 0.72, 0.99, 0.68, 0.26);
        setDot(tb_125, te_125, 0.23, 0.63, 0.39, 0.83, 0.89, 0.73);
        setDot(tb_126, te_126, 0.49, 0.72, 0.81, 0.51, 0.04, 0.85);
        setDot(tb_127, te_127, 0.18, 0.18, 0.14, 0.05, 0.17, 0.37);
        setDot(tb_128, te_128, 0.41, 0.43, 0.07, 0.46, 0.29, 0.50);
        setDot(tb_129, te_129, 0.00, 0.13, 0.18, 0.77, 0.31, 0.79);
        setDot(tb_130, te_130, 0.85, 0.53, 0.70, 0.23, 0.28, 0.10);

        setDotMarkSin(tb_191, 0.11, 0.51, "A");
        setDotMarkSin(tb_192, 0.08, 0.74, "B");
        setDotMarkSin(tb_193, 0.76, 0.92, "C");
    }

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
        set1();
    }, 10);

});