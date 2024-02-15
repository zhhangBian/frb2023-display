document.addEventListener("DOMContentLoaded", function () {
    const canvas2 = document.getElementById('canvas2');
    const painter2 = canvas2.getContext('2d');

    canvas2.width = canvas2.offsetWidth;
    canvas2.height = canvas2.offsetHeight;
    const divWidth2 = canvas2.offsetWidth;
    const divHeight2 = canvas2.offsetHeight;

    const tb_201 = 3842, te_201 = 48231;
    const tb_202 = 3922, te_202 = 29241;
    const tb_203 = 411, te_203 = 30741;
    const tb_204 = 1615, te_204 = 46502;
    const tb_205 = 2643, te_205 = 25273;
    const tb_206 = 2270, te_206 = 49273;
    const tb_207 = 1549, te_207 = 39134;
    const tb_208 = 892, te_208 = 27086;
    const tb_209 = 3135, te_209 = 47360;
    const tb_210 = 514, te_210 = 24003;
    const tb_211 = 4539, te_211 = 21312;
    const tb_212 = 2361, te_212 = 44547;
    const tb_213 = 3062, te_213 = 31407;
    const tb_214 = 4718, te_214 = 31967;
    const tb_215 = 3975, te_215 = 22137;
    const tb_216 = 3408, te_216 = 46268;
    const tb_217 = 4727, te_217 = 42857;
    const tb_218 = 5627, te_218 = 33057;
    const tb_219 = 614, te_219 = 48527;
    const tb_220 = 5149, te_220 = 56774;
    const tb_221 = 2354, te_221 = 58331;
    const tb_222 = 5683, te_222 = 23118;
    const tb_223 = 888, te_223 = 33033;
    const tb_224 = 409, te_224 = 44283;
    const tb_225 = 5728, te_225 = 53606;
    const tb_226 = 5341, te_226 = 42193;
    const tb_227 = 1668, te_227 = 24991;
    const tb_228 = 832, te_228 = 52776;
    const tb_229 = 5981, te_229 = 50846;
    const tb_230 = 2244, te_230 = 38474;

    const tb_291 = 10421;
    const tb_292 = 19637;
    const tb_293 = 13032;

    function drawCurve(beginX, beginY, ctrlX, ctrlY, endX, endY) {
        painter2.beginPath();
        painter2.moveTo(beginX * divWidth2, beginY * divHeight2);
        painter2.quadraticCurveTo(ctrlX * divWidth2, ctrlY * divHeight2, endX * divWidth2, endY * divHeight2);
        painter2.strokeStyle = "#8B6914";
        painter2.lineWidth = 2;
        painter2.stroke();
    }

    function getX(t, beginX, beginY, ctrlX, ctrlY, endX, endYY) {
        return (1 - t) * (1 - t) * beginX * divWidth2 + 2 * (1 - t) * t * ctrlX * divWidth2 + t * t * endX * divHeight2;
    }

    function getY(t, beginX, beginY, ctrlX, ctrlY, endX, endY) {
        return (1 - t) * (1 - t) * beginY * divHeight2 + 2 * (1 - t) * t * ctrlY * divHeight2 + t * t * endY * divHeight2;
    }

    function setDot(timeBegin, timeEnd, beginX, beginY, ctrlX, ctrlY, endX, endY) {
        var t = (time - timeBegin) / (timeEnd - timeBegin);
        var x, y;

        if (time < timeBegin) {
            painter2.fillStyle = "#FF7F00";
            x = beginX * divWidth2;
            y = beginY * divHeight2;
        } else if (time >= timeBegin && time <= timeEnd) {
            drawCurve(beginX, beginY, ctrlX, ctrlY, endX, endY);
            painter2.fillStyle = "#00FF00";
            x = getX(t, beginX, beginY, ctrlX, ctrlY, endX, endY);
            y = getY(t, beginX, beginY, ctrlX, ctrlY, endX, endY);
        } else if (time > timeEnd && time <= timeEnd + 1000) {
            painter2.fillStyle = "#F0F8FF	";
            x = endX * divWidth2;
            y = endY * divHeight2;
        }

        painter2.beginPath();
        painter2.arc(x, y, 5, 0, 2 * Math.PI);
        painter2.fill();
    }

    function setDotMarkSin(timeBegin, beginX, beginY, label) {
        if (time < timeBegin) {
            painter2.fillStyle = "#FF7F00";
        } else {
            if (time % 1000 >= 500)
                painter2.fillStyle = "#FF0000";
            else
                painter2.fillStyle = "#FFFFFF";
        }
        painter2.beginPath();
        painter2.arc(beginX * divWidth2, beginY * divHeight2, 9, 0, 2 * Math.PI);
        painter2.fill();

        painter2.fillStyle = "#FF0000"; // 设置文本颜色
        painter2.font = "bold 20px Arial"; // 设置文本字体和大小
        painter2.fillText(label, beginX * divWidth2 - 10, beginY * divHeight2 - 10);
    }

    function set2() {
        painter2.clearRect(0, 0, divWidth2, divHeight2);

        setDot(tb_201, te_201, 0.30, 0.15, 0.54, 0.16, 0.56, 0.55);
        setDot(tb_202, te_202, 0.16, 0.29, 0.20, 0.33, 0.65, 0.74);
        setDot(tb_203, te_203, 0.03, 0.82, 0.80, 0.20, 0.51, 0.32);
        setDot(tb_204, te_204, 0.93, 0.99, 0.05, 0.23, 0.21, 0.46);
        setDot(tb_205, te_205, 0.08, 0.78, 0.75, 0.09, 0.82, 0.59);
        setDot(tb_206, te_206, 0.88, 0.49, 0.54, 0.21, 0.88, 0.35);
        setDot(tb_207, te_207, 0.28, 0.19, 0.22, 0.64, 0.60, 0.36);
        setDot(tb_208, te_208, 0.15, 0.67, 0.22, 0.70, 0.44, 0.69);
        setDot(tb_209, te_209, 0.51, 0.71, 0.16, 0.54, 0.96, 0.91);
        setDot(tb_210, te_210, 0.99, 0.75, 0.64, 0.01, 0.72, 0.10);
        setDot(tb_211, te_211, 0.87, 0.69, 0.30, 0.26, 0.38, 0.81);
        setDot(tb_212, te_212, 0.41, 0.13, 0.50, 0.93, 0.38, 0.89);
        setDot(tb_213, te_213, 0.34, 0.50, 0.32, 0.83, 0.84, 0.98);
        setDot(tb_214, te_214, 0.27, 0.37, 0.26, 0.45, 0.30, 0.08);
        setDot(tb_215, te_215, 0.69, 0.17, 0.34, 0.22, 0.82, 0.88);
        setDot(tb_216, te_216, 0.25, 0.65, 0.94, 0.17, 0.72, 0.62);
        setDot(tb_217, te_217, 0.92, 0.02, 0.04, 0.23, 0.80, 0.38);
        setDot(tb_218, te_218, 0.24, 0.03, 0.00, 0.97, 0.83, 0.21);
        setDot(tb_219, te_219, 0.32, 0.26, 0.39, 0.82, 0.35, 0.60);
        setDot(tb_220, te_220, 0.02, 0.51, 0.72, 0.92, 0.16, 0.49);
        setDot(tb_221, te_221, 0.97, 0.87, 0.13, 0.68, 0.75, 0.42);
        setDot(tb_222, te_222, 0.06, 0.89, 0.88, 0.96, 0.23, 0.54);
        setDot(tb_223, te_223, 0.65, 0.40, 0.35, 0.85, 0.50, 0.12);
        setDot(tb_224, te_224, 0.08, 0.48, 0.17, 0.69, 0.69, 0.14);
        setDot(tb_225, te_225, 0.80, 0.45, 0.29, 0.20, 0.24, 0.37);
        setDot(tb_226, te_226, 0.57, 0.77, 0.75, 0.02, 0.26, 0.94);
        setDot(tb_227, te_227, 0.98, 0.49, 0.03, 0.37, 0.63, 0.65);
        setDot(tb_228, te_228, 0.64, 0.71, 0.47, 0.58, 0.83, 0.43);
        setDot(tb_229, te_229, 0.61, 0.21, 0.76, 0.46, 0.52, 0.61);
        setDot(tb_230, te_230, 0.14, 0.94, 0.04, 0.63, 0.78, 0.65);

        setDotMarkSin(tb_291, 0.28, 0.10, "D");
        setDotMarkSin(tb_292, 0.76, 0.76, "E");
        setDotMarkSin(tb_293, 0.13, 0.40, "F");
    }

    function timeSet() {
        let time = Date.now() - timeBegin;

        if (time > timeMax) {
            currentTime = 0;
            timeBegin = Date.now();
            time = 0;
        }
        progressBar.value = time;
    }

    setInterval(function () {
        timeSet();
        set2();
    }, 10);

});