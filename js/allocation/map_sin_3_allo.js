document.addEventListener("DOMContentLoaded", function () {
    const canvas3 = document.getElementById('canvas3');
    const painter3 = canvas3.getContext('2d');

    canvas3.width = canvas3.offsetWidth;
    canvas3.height = canvas3.offsetHeight;
    const divWidth3 = canvas3.offsetWidth;
    const divHeight3 = canvas3.offsetHeight;

    const tb_301 = 592, te_301 = 33004;
    const tb_302 = 340, te_302 = 40763;
    const tb_303 = 383, te_303 = 42537;
    const tb_304 = 540, te_304 = 26335;
    const tb_305 = 518, te_305 = 44374;
    const tb_306 = 3645, te_306 = 50627;
    const tb_307 = 2699, te_307 = 25106;
    const tb_308 = 4405, te_308 = 22207;
    const tb_309 = 2430, te_309 = 28661;
    const tb_310 = 551, te_310 = 54325;
    const tb_311 = 2742, te_311 = 40423;
    const tb_312 = 1946, te_312 = 30212;
    const tb_313 = 1598, te_313 = 25772;
    const tb_314 = 1044, te_314 = 47847;
    const tb_315 = 4343, te_315 = 55117;
    const tb_316 = 1592, te_316 = 42036;
    const tb_317 = 4567, te_317 = 25345;
    const tb_318 = 531, te_318 = 43829;
    const tb_319 = 2062, te_319 = 46998;
    const tb_320 = 2072, te_320 = 48727;
    const tb_321 = 3208, te_321 = 51033;
    const tb_322 = 3620, te_322 = 47868;
    const tb_323 = 532, te_323 = 38777;
    const tb_324 = 442, te_324 = 55470;
    const tb_325 = 3867, te_325 = 27760;
    const tb_326 = 4438, te_326 = 39811;
    const tb_327 = 3395, te_327 = 46710;
    const tb_328 = 4332, te_328 = 55800;
    const tb_329 = 994, te_329 = 34678;
    const tb_330 = 4098, te_330 = 50424;

    const tb_391 = 17896;
    const tb_392 = 14726;
    const tb_393 = 15983;

    function drawCurve(beginX, beginY, ctrlX, ctrlY, endX, endY) {
        painter3.beginPath();
        painter3.moveTo(beginX * divWidth3, beginY * divHeight3);
        painter3.quadraticCurveTo(ctrlX * divWidth3, ctrlY * divHeight3, endX * divWidth3, endY * divHeight3);
        painter3.strokeStyle = "#7A8B8B";
        painter3.lineWidth = 2;
        painter3.stroke();
    }

    function getX(t, beginX, beginY, ctrlX, ctrlY, endX, endYY) {
        return (1 - t) * (1 - t) * beginX * divWidth3 + 2 * (1 - t) * t * ctrlX * divWidth3 + t * t * endX * divWidth3;
    }

    function getY(t, beginX, beginY, ctrlX, ctrlY, endX, endY) {
        return (1 - t) * (1 - t) * beginY * divHeight3 + 2 * (1 - t) * t * ctrlY * divHeight3 + t * t * endY * divHeight3;
    }

    function setDot(timeBegin, timeEnd, beginX, beginY, ctrlX, ctrlY, endX, endY) {
        var t = (time - timeBegin) / (timeEnd - timeBegin);
        var x, y;

        if (time < timeBegin) {
            painter3.fillStyle = "#FF7F00";
            x = beginX * divWidth3;
            y = beginY * divHeight3;
        } else if (time >= timeBegin && time <= timeEnd) {
            drawCurve(beginX, beginY, ctrlX, ctrlY, endX, endY);
            painter3.fillStyle = "#00FF00";
            x = getX(t, beginX, beginY, ctrlX, ctrlY, endX, endY);
            y = getY(t, beginX, beginY, ctrlX, ctrlY, endX, endY);
        } else if (time > timeEnd && time <= timeEnd + 1000) {
            painter3.fillStyle = "#838B83	";
            x = endX * divWidth3;
            y = endY * divHeight3;
        }

        painter3.beginPath();
        painter3.arc(x, y, 5, 0, 2 * Math.PI);
        painter3.fill();
    }

    function setDotMarkSin(timeBegin, beginX, beginY, label) {
        if (time < timeBegin) {
            painter3.fillStyle = "#FF7F00";
        } else {
            if (time % 1000 >= 500)
                painter3.fillStyle = "#FF0000";
            else
                painter3.fillStyle = "#FFFFFF";
        }
        painter3.beginPath();
        painter3.arc(beginX * divWidth3, beginY * divHeight3, 9, 0, 2 * Math.PI);
        painter3.fill();

        painter3.fillStyle = "#FF0000"; // 设置文本颜色
        painter3.font = "bold 20px Arial"; // 设置文本字体和大小
        painter3.fillText(label, beginX * divWidth3 - 10, beginY * divHeight3 - 10);
    }

    function set3() {
        painter3.clearRect(0, 0, divWidth3, divHeight3);

        setDot(tb_301, te_301, 0.18, 0.49, 0.07, 0.27, 0.90, 0.69);
        setDot(tb_302, te_302, 0.42, 0.43, 0.83, 0.63, 0.75, 0.67);
        setDot(tb_303, te_303, 0.95, 0.57, 0.83, 0.99, 0.01, 0.04);
        setDot(tb_304, te_304, 0.90, 0.19, 0.57, 0.75, 0.39, 0.50);
        setDot(tb_305, te_305, 0.73, 0.15, 0.07, 0.49, 0.03, 0.24);
        setDot(tb_306, te_306, 0.84, 0.17, 0.50, 0.82, 0.56, 0.62);
        setDot(tb_307, te_307, 0.34, 0.89, 0.56, 0.04, 0.35, 0.59);
        setDot(tb_308, te_308, 0.07, 0.19, 0.47, 0.13, 0.88, 0.18);
        setDot(tb_309, te_309, 0.38, 0.89, 0.12, 0.63, 0.45, 0.34);
        setDot(tb_310, te_310, 0.96, 0.35, 0.79, 0.49, 0.36, 0.34);
        setDot(tb_311, te_311, 0.44, 0.41, 0.54, 0.64, 0.11, 0.37);
        setDot(tb_312, te_312, 0.69, 0.09, 0.20, 0.18, 0.99, 0.32);
        setDot(tb_313, te_313, 0.60, 0.82, 0.52, 0.04, 0.18, 0.20);
        setDot(tb_314, te_314, 0.19, 0.65, 0.18, 0.83, 0.74, 0.47);
        setDot(tb_315, te_315, 0.91, 0.99, 0.23, 0.37, 0.74, 0.00);
        setDot(tb_316, te_316, 0.77, 0.08, 0.46, 0.42, 0.79, 0.59);
        setDot(tb_317, te_317, 0.04, 0.17, 0.79, 0.70, 0.95, 0.52);
        setDot(tb_318, te_318, 0.94, 0.72, 0.96, 0.06, 0.29, 0.72);
        setDot(tb_319, te_319, 0.38, 0.80, 0.34, 1.00, 0.87, 0.91);
        setDot(tb_320, te_320, 0.77, 0.26, 0.37, 0.41, 0.26, 0.71);
        setDot(tb_321, te_321, 0.18, 0.97, 0.26, 0.91, 0.77, 0.54);
        setDot(tb_322, te_322, 0.41, 0.70, 0.80, 0.26, 0.85, 0.06);
        setDot(tb_323, te_323, 0.16, 0.96, 0.70, 0.27, 0.48, 0.14);
        setDot(tb_324, te_324, 0.93, 0.95, 0.47, 0.93, 0.81, 0.29);
        setDot(tb_325, te_325, 1.00, 0.67, 0.10, 0.80, 0.51, 0.35);
        setDot(tb_326, te_326, 0.87, 0.18, 0.45, 0.84, 0.85, 0.62);
        setDot(tb_327, te_327, 0.85, 0.09, 0.41, 0.26, 0.83, 0.39);
        setDot(tb_328, te_328, 0.90, 0.95, 0.16, 0.22, 0.77, 0.04);
        setDot(tb_329, te_329, 0.22, 0.46, 0.61, 0.30, 0.25, 0.38);
        setDot(tb_330, te_330, 0.15, 0.80, 0.67, 0.31, 0.03, 0.84);

        setDotMarkSin(tb_391, 0.32, 0.51, "G");
        setDotMarkSin(tb_392, 0.62, 0.54, "H");
        setDotMarkSin(tb_393, 0.83, 0.41, "I");
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
        set3();
    }, 10);

});