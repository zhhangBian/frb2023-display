document.addEventListener("DOMContentLoaded", function () {

var timeBegin = Date.now(), time;
const timeMax=60000;

const canvas0=document.getElementById('canvas0');
const painter0=canvas0.getContext('2d');

canvas0.width = canvas0.offsetWidth;
canvas0.height = canvas0.offsetHeight;
const divWidth0=canvas0.offsetWidth;
const divHeight0=canvas0.offsetHeight;

const tb_001=4949, te_001=36739;
const tb_002=2546, te_002=51318;
const tb_003=4001, te_003=45953;
const tb_004=3709, te_004=21068;
const tb_005=5481, te_005=25174;
const tb_006=2004, te_006=56724;
const tb_007=141, te_007=32234;
const tb_008=455, te_008=51422;
const tb_009=5878, te_009=48514;
const tb_010=630, te_010=24674;
const tb_011=757, te_011=42599;
const tb_012=5416, te_012=21622;
const tb_013=3039, te_013=55290;
const tb_014=27, te_014=33154;
const tb_015=5177, te_015=32522;
const tb_016=5102, te_016=40883;
const tb_017=4900, te_017=53934;
const tb_018=3282, te_018=52074;
const tb_019=5605, te_019=37863;
const tb_020=670, te_020=47339;
const tb_021=3457, te_021=58230;
const tb_022=5948, te_022=29776;
const tb_023=5973, te_023=40562;
const tb_024=397, te_024=56002;
const tb_025=2180, te_025=40226;
const tb_026=1308, te_026=54779;
const tb_027=4454, te_027=40699;
const tb_028=4794, te_028=46885;
const tb_029=5003, te_029=41156;
const tb_030=475, te_030=31517;

const tb_031=3842, te_031=48231;
const tb_032=3922, te_032=29241;
const tb_033=411, te_033=30741;
const tb_034=1615, te_034=46502;
const tb_035=2643, te_035=25273;
const tb_036=2270, te_036=49273;
const tb_037=1549, te_037=39134;
const tb_038=892, te_038=27086;
const tb_039=3135, te_039=47360;
const tb_040=514, te_040=24003;
const tb_041=4539, te_041=21312;
const tb_042=2361, te_042=44547;
const tb_043=3062, te_043=31407;
const tb_044=4718, te_044=31967;
const tb_045=3975, te_045=22137;
const tb_046=3408, te_046=46268;
const tb_047=4727, te_047=42857;
const tb_048=5627, te_048=33057;
const tb_049=614, te_049=48527;
const tb_050=5149, te_050=56774;
const tb_051=2354, te_051=58331;
const tb_052=5683, te_052=23118;
const tb_053=888, te_053=33033;
const tb_054=409, te_054=44283;
const tb_055=5728, te_055=53606;
const tb_056=5341, te_056=42193;
const tb_057=1668, te_057=24991;
const tb_058=832, te_058=52776;
const tb_059=5981, te_059=50846;
const tb_060=2244, te_060=38474;

const tb_061=592, te_061=33004;
const tb_062=340, te_062=40763;
const tb_063=383, te_063=42537;
const tb_064=540, te_064=26335;
const tb_065=518, te_065=44374;
const tb_066=3645, te_066=50627;
const tb_067=2699, te_067=25106;
const tb_068=4405, te_068=22207;
const tb_069=2430, te_069=28661;
const tb_070=551, te_070=54325;
const tb_071=2742, te_071=40423;
const tb_072=1946, te_072=30212;
const tb_073=1598, te_073=25772;
const tb_074=1044, te_074=47847;
const tb_075=4343, te_075=55117;
const tb_076=1592, te_076=42036;
const tb_077=4567, te_077=25345;
const tb_078=531, te_078=43829;
const tb_079=2062, te_079=46998;
const tb_080=2072, te_080=48727;
const tb_081=3208, te_081=51033;
const tb_082=3620, te_082=47868;
const tb_083=532, te_083=38777;
const tb_084=442, te_084=55470;
const tb_085=3867, te_085=27760;
const tb_086=4438, te_086=39811;
const tb_087=3395, te_087=46710;
const tb_088=4332, te_088=55800;
const tb_089=994, te_089=34678;
const tb_090=4098, te_090=50424;

const tb_901=17030, te_901=49023;
const tb_902=11216, te_902=48618;
const tb_903=18399, te_903=41951;
const tb_904=10421, te_904=41298;
const tb_905=19637, te_905=46254;
const tb_906=13032, te_906=57264;
const tb_907=17896, te_907=44405;
const tb_908=14726, te_908=40336;
const tb_909=15983, te_909=58848;

const progressBar = document.getElementById('timeControl-allocation');
// 添加事件监听器以允许手动控制进度条
progressBar.addEventListener('input', function () {
  currentTime = parseInt(progressBar.value);
  timeBegin=Date.now()-currentTime;
  time=currentTime;
});

function drawCurve(beginX, beginY, ctrlX, ctrlY, endX, endY, type) {
  painter0.beginPath();
  painter0.moveTo(beginX*divWidth0, beginY*divHeight0);
  painter0.quadraticCurveTo(ctrlX*divWidth0, ctrlY*divHeight0, endX*divWidth0, endY*divHeight0);

  painter0.lineWidth = 3;
  if(type==0) {
    painter0.lineWidth = 5;
    painter0.strokeStyle = "#00868B";
  }
  else if(type==1)  painter0.strokeStyle = "#8B658B";
  else if(type==2)  painter0.strokeStyle = "#8B6914";
  else  painter0.strokeStyle = "#7A8B8B";

  painter0.stroke();
}

function getX(t,beginX, beginY, ctrlX, ctrlY, endX, endYY) {
  return (1-t)*(1-t)*beginX*divWidth0 + 2*(1-t)*t*ctrlX*divWidth0 + t*t*endX*divHeight0;
}

function getY(t,beginX, beginY, ctrlX, ctrlY, endX, endY) {
  return (1-t)*(1-t)*beginY*divHeight0 + 2*(1-t)*t*ctrlY*divHeight0 + t*t*endY*divHeight0;
}

function setDot(timeBegin, timeEnd, beginX, beginY, ctrlX, ctrlY, endX, endY, type) {
  var t=(time-timeBegin)/(timeEnd-timeBegin);
  var x,y;

  if(time<timeBegin) {
    painter0.fillStyle = "#FF7F00";
    x = beginX*divWidth0;
    y = beginY*divHeight0;
  }
  else if(time>=timeBegin && time<=timeEnd) {
    drawCurve(beginX,beginY,ctrlX,ctrlY,endX,endY,type);
    painter0.fillStyle = "#00FF00";
    x = getX(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
    y = getY(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
  }
  else if(time>timeEnd && time<=timeEnd+1000) {
    painter0.fillStyle = "#F0F8FF	";
    x= endX*divWidth0;
    y= endY*divHeight0;
  }

  painter0.beginPath();
  painter0.arc(x, y, 7, 0, 2 * Math.PI);
  painter0.fill();
}

function setDotMarkFed(timeBegin, timeEnd, beginX, beginY, ctrlX, ctrlY, endX, endY, label) {
  var t=(time-timeBegin)/(timeEnd-timeBegin);
  var x,y;

  if(time<timeBegin) {
    painter0.fillStyle = "#FF7F00";
    x = beginX*divWidth0;
    y = beginY*divHeight0;
  }
  else if(time>=timeBegin && time<=timeEnd) {
    drawCurve(beginX,beginY,ctrlX,ctrlY,endX,endY,0);
    painter0.fillStyle = "#FFFF00";
    x = getX(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
    y = getY(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
  }
  else if(time>timeEnd && time<=timeEnd+1000) {
    painter0.fillStyle = "#F0F8FF	";
    x= endX*divWidth0;
    y= endY*divHeight0;
  }

  painter0.beginPath();
  painter0.arc(x, y, 12, 0, 2 * Math.PI);
  painter0.fill();

  painter0.fillStyle = "#FF0000"; // 设置文本颜色
  painter0.font = "bold 30px Arial"; // 设置文本字体和大小
  painter0.fillText(label, x - 15, y - 15); 
}

function set0() {
  painter0.clearRect(0, 0, divWidth0, divHeight0);

  console.log(divWidth0,divHeight0);

  setDot(tb_001, te_001, 0.82, 0.59, 0.29, 0.78, 0.57, 0.29, 1);
  setDot(tb_002, te_002, 0.48, 0.89, 0.12, 0.62, 0.63, 0.96, 1);
  setDot(tb_003, te_003, 0.45, 0.15, 0.82, 0.96, 0.12, 0.44, 1);
  setDot(tb_004, te_004, 0.42, 0.33, 0.55, 0.10, 0.62, 0.98, 1);
  setDot(tb_005, te_005, 0.12, 0.24, 0.03, 0.47, 0.63, 0.38, 1);
  setDot(tb_006, te_006, 0.19, 0.23, 0.73, 0.86, 0.18, 0.07, 1);
  setDot(tb_007, te_007, 0.32, 0.90, 0.75, 0.31, 0.54, 0.05, 1);
  setDot(tb_008, te_008, 0.71, 0.81, 0.64, 0.80, 0.84, 0.62, 1);
  setDot(tb_009, te_009, 0.60, 0.01, 0.66, 0.78, 0.61, 0.81, 1);
  setDot(tb_010, te_010, 0.85, 0.08, 0.71, 0.20, 0.75, 0.63, 1);
  setDot(tb_011, te_011, 0.57, 0.29, 0.83, 0.91, 0.24, 0.32, 1);
  setDot(tb_012, te_012, 0.69, 0.97, 0.35, 0.27, 0.39, 0.32, 1);
  setDot(tb_013, te_013, 0.34, 0.05, 0.37, 0.80, 0.83, 0.37, 1);
  setDot(tb_014, te_014, 0.66, 0.25, 0.21, 0.43, 0.94, 0.53, 1);
  setDot(tb_015, te_015, 0.34, 0.82, 0.78, 0.29, 0.74, 0.99, 1);
  setDot(tb_016, te_016, 0.53, 0.44, 0.58, 0.74, 0.31, 0.20, 1);
  setDot(tb_017, te_017, 0.63, 0.72, 0.40, 0.67, 0.44, 0.42, 1);
  setDot(tb_018, te_018, 0.11, 0.18, 0.46, 0.37, 0.64, 0.80, 1);
  setDot(tb_019, te_019, 0.74, 0.74, 0.43, 0.28, 0.76, 0.11, 1);
  setDot(tb_020, te_020, 0.76, 0.59, 0.93, 0.39, 0.18, 0.73, 1);
  setDot(tb_021, te_021, 0.29, 0.20, 0.50, 0.96, 0.55, 0.74, 1);
  setDot(tb_022, te_022, 0.18, 0.99, 0.67, 0.37, 0.27, 0.16, 1);
  setDot(tb_023, te_023, 0.00, 0.63, 0.78, 0.51, 0.08, 0.44, 1);
  setDot(tb_024, te_024, 0.24, 0.96, 0.72, 0.99, 0.68, 0.26, 1);
  setDot(tb_025, te_025, 0.23, 0.63, 0.39, 0.83, 0.89, 0.73, 1);
  setDot(tb_026, te_026, 0.49, 0.72, 0.81, 0.51, 0.04, 0.85, 1);
  setDot(tb_027, te_027, 0.18, 0.18, 0.14, 0.05, 0.17, 0.37, 1);
  setDot(tb_028, te_028, 0.41, 0.43, 0.07, 0.46, 0.29, 0.50, 1);
  setDot(tb_029, te_029, 0.00, 0.13, 0.18, 0.77, 0.31, 0.79, 1);
  setDot(tb_030, te_030, 0.85, 0.53, 0.70, 0.23, 0.28, 0.10, 1);

  setDot(tb_031, te_031, 0.30, 0.15, 0.54, 0.16, 0.56, 0.55, 2);
  setDot(tb_032, te_032, 0.16, 0.29, 0.20, 0.33, 0.65, 0.74, 2);
  setDot(tb_033, te_033, 0.03, 0.82, 0.80, 0.20, 0.51, 0.32, 2);
  setDot(tb_034, te_034, 0.93, 0.99, 0.05, 0.23, 0.21, 0.46, 2);
  setDot(tb_035, te_035, 0.08, 0.78, 0.75, 0.09, 0.82, 0.59, 2);
  setDot(tb_036, te_036, 0.88, 0.49, 0.54, 0.21, 0.88, 0.35, 2);
  setDot(tb_037, te_037, 0.28, 0.19, 0.22, 0.64, 0.60, 0.36, 2);
  setDot(tb_038, te_038, 0.15, 0.67, 0.22, 0.70, 0.44, 0.69, 2);
  setDot(tb_039, te_039, 0.51, 0.71, 0.16, 0.54, 0.96, 0.91, 2);
  setDot(tb_040, te_040, 0.99, 0.75, 0.64, 0.01, 0.72, 0.10, 2);
  setDot(tb_041, te_041, 0.87, 0.69, 0.30, 0.26, 0.38, 0.81, 2);
  setDot(tb_042, te_042, 0.41, 0.13, 0.50, 0.93, 0.38, 0.89, 2);
  setDot(tb_043, te_043, 0.34, 0.50, 0.32, 0.83, 0.84, 0.98, 2);
  setDot(tb_044, te_044, 0.27, 0.37, 0.26, 0.45, 0.30, 0.08, 2);
  setDot(tb_045, te_045, 0.69, 0.17, 0.34, 0.22, 0.82, 0.88, 2);
  setDot(tb_046, te_046, 0.25, 0.65, 0.94, 0.17, 0.72, 0.62, 2);
  setDot(tb_047, te_047, 0.92, 0.02, 0.04, 0.23, 0.80, 0.38, 2);
  setDot(tb_048, te_048, 0.24, 0.03, 0.00, 0.97, 0.83, 0.21, 2);
  setDot(tb_049, te_049, 0.32, 0.26, 0.39, 0.82, 0.35, 0.60, 2);
  setDot(tb_050, te_050, 0.02, 0.51, 0.72, 0.92, 0.16, 0.49, 2);
  setDot(tb_051, te_051, 0.97, 0.87, 0.13, 0.68, 0.75, 0.42, 2);
  setDot(tb_052, te_052, 0.06, 0.89, 0.88, 0.96, 0.23, 0.54, 2);
  setDot(tb_053, te_053, 0.65, 0.40, 0.35, 0.85, 0.50, 0.12, 2);
  setDot(tb_054, te_054, 0.08, 0.48, 0.17, 0.69, 0.69, 0.14, 2);
  setDot(tb_055, te_055, 0.80, 0.45, 0.29, 0.20, 0.24, 0.37, 2);
  setDot(tb_056, te_056, 0.57, 0.77, 0.75, 0.02, 0.26, 0.94, 2);
  setDot(tb_057, te_057, 0.98, 0.49, 0.03, 0.37, 0.63, 0.65, 2);
  setDot(tb_058, te_058, 0.64, 0.71, 0.47, 0.58, 0.83, 0.43, 2);
  setDot(tb_059, te_059, 0.61, 0.21, 0.76, 0.46, 0.52, 0.61, 2);
  setDot(tb_060, te_060, 0.14, 0.94, 0.04, 0.63, 0.78, 0.65, 2);

  setDot(tb_061, te_061, 0.18, 0.49, 0.07, 0.27, 0.90, 0.69, 3);
  setDot(tb_062, te_062, 0.42, 0.43, 0.83, 0.63, 0.75, 0.67, 3);
  setDot(tb_063, te_063, 0.95, 0.57, 0.83, 0.99, 0.01, 0.04, 3);
  setDot(tb_064, te_064, 0.90, 0.19, 0.57, 0.75, 0.39, 0.50, 3);
  setDot(tb_065, te_065, 0.73, 0.15, 0.07, 0.49, 0.03, 0.24, 3);
  setDot(tb_066, te_066, 0.84, 0.17, 0.50, 0.82, 0.56, 0.62, 3);
  setDot(tb_067, te_067, 0.34, 0.89, 0.56, 0.04, 0.35, 0.59, 3);
  setDot(tb_068, te_068, 0.07, 0.19, 0.47, 0.13, 0.88, 0.18, 3);
  setDot(tb_069, te_069, 0.38, 0.89, 0.12, 0.63, 0.45, 0.34, 3);
  setDot(tb_070, te_070, 0.96, 0.35, 0.79, 0.49, 0.36, 0.34, 3);
  setDot(tb_071, te_071, 0.44, 0.41, 0.54, 0.64, 0.11, 0.37, 3);
  setDot(tb_072, te_072, 0.69, 0.09, 0.20, 0.18, 0.99, 0.32, 3);
  setDot(tb_073, te_073, 0.60, 0.82, 0.52, 0.04, 0.18, 0.20, 3);
  setDot(tb_074, te_074, 0.19, 0.65, 0.18, 0.83, 0.74, 0.47, 3);
  setDot(tb_075, te_075, 0.91, 0.99, 0.23, 0.37, 0.74, 0.00, 3);
  setDot(tb_076, te_076, 0.77, 0.08, 0.46, 0.42, 0.79, 0.59, 3);
  setDot(tb_077, te_077, 0.04, 0.17, 0.79, 0.70, 0.95, 0.52, 3);
  setDot(tb_078, te_078, 0.94, 0.72, 0.96, 0.06, 0.29, 0.72, 3);
  setDot(tb_079, te_079, 0.38, 0.80, 0.34, 1.00, 0.87, 0.91, 3);
  setDot(tb_080, te_080, 0.77, 0.26, 0.37, 0.41, 0.26, 0.71, 3);
  setDot(tb_081, te_081, 0.18, 0.97, 0.26, 0.91, 0.77, 0.54, 3);
  setDot(tb_082, te_082, 0.41, 0.70, 0.80, 0.26, 0.85, 0.06, 3);
  setDot(tb_083, te_083, 0.16, 0.96, 0.70, 0.27, 0.48, 0.14, 3);
  setDot(tb_084, te_084, 0.93, 0.95, 0.47, 0.93, 0.81, 0.29, 3);
  setDot(tb_085, te_085, 1.00, 0.67, 0.10, 0.80, 0.51, 0.35, 3);
  setDot(tb_086, te_086, 0.87, 0.18, 0.45, 0.84, 0.85, 0.62, 3);
  setDot(tb_087, te_087, 0.85, 0.09, 0.41, 0.26, 0.83, 0.39, 3);
  setDot(tb_088, te_088, 0.90, 0.95, 0.16, 0.22, 0.77, 0.04, 3);
  setDot(tb_089, te_089, 0.22, 0.46, 0.61, 0.30, 0.25, 0.38, 3);
  setDot(tb_090, te_090, 0.15, 0.80, 0.67, 0.31, 0.03, 0.84, 3);

  setDotMarkFed(tb_901, te_901, 0.11, 0.51, 0.04, 0.68, 0.86, 0.31, "A");
  setDotMarkFed(tb_902, te_902, 0.08, 0.74, 0.35, 0.42, 0.12, 0.09, "B");
  setDotMarkFed(tb_903, te_903, 0.76, 0.92, 0.92, 0.68, 0.90, 0.47, "C");
  setDotMarkFed(tb_904, te_904, 0.28, 0.10, 0.58, 0.67, 0.34, 0.86, "D");
  setDotMarkFed(tb_905, te_905, 0.76, 0.76, 0.90, 0.50, 0.17, 0.82, "E");
  setDotMarkFed(tb_906, te_906, 0.13, 0.40, 0.58, 0.10, 0.21, 0.45, "F");
  setDotMarkFed(tb_907, te_907, 0.32, 0.51, 0.09, 0.48, 0.73, 0.58, "G");
  setDotMarkFed(tb_908, te_908, 0.62, 0.54, 0.60, 0.05, 0.25, 0.58, "H");
  setDotMarkFed(tb_909, te_909, 0.83, 0.41, 0.50, 0.06, 0.13, 0.77, "I");
}

function timeSet() {
  time=Date.now()-timeBegin;

  if(time>timeMax) {
    currentTime=0;
    timeBegin=Date.now();
    time=0;
  }
  progressBar.value=time;
}

var timer = setInterval(function () {
  timeSet();
  set0();

  let timeAllo = document.getElementById('time-allo');
  let num = `14  :  ${(parseInt(time / timeMax * 60)).toString().padStart(2, '0')}`;
  timeAllo.value = num;
}, 10);
  
});