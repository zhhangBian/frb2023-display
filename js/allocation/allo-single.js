document.addEventListener("DOMContentLoaded", function () {

var timeBegin = Date.now(), time;
const timeMax=30000;

const tb_1=1100, te_1=11800;
const tb_2=1800, te_2=12400;
const tb_3=1700, te_3=12600;
const tb_4=2100, te_4=12400;
const tb_5=2300, te_5=20400;
const tb_6=1000, te_6=20200;
const tb_7=1400, te_7=12100;
const tb_8=1000, te_8=11200;
const tb_9=1200, te_9=15700;
const tb_10=1500, te_10=17400;
const tb_11=1500, te_11=16400;
const tb_12=1700, te_12=10600;
const tb_13=2200, te_13=19800;
const tb_14=1300, te_14=13200;
const tb_15=1200, te_15=19100;
const tb_16=1000, te_16=15200;
const tb_17=1200, te_17=15300;
const tb_18=1300, te_18=11800;
const tb_19=2400, te_19=19500;
const tb_20=1400, te_20=15100;

const tb_21=3500;
const tb_22=3500;
const tb_23=4100;
const tb_24=3900;
const tb_25=3900;

const progressBar = document.getElementById('timeControl-allocation');
// 添加事件监听器以允许手动控制进度条
progressBar.addEventListener('input', function () {
  currentTime = parseInt(progressBar.value);
  timeBegin=Date.now()-currentTime;
  time=currentTime;
});

const canvas1=document.getElementById('canvas1');
const painter1=canvas1.getContext('2d');

canvas1.width = canvas1.offsetWidth;
canvas1.height = canvas1.offsetHeight;
const divWidth1=canvas1.offsetWidth;
const divHeight1=canvas1.offsetHeight;

console.log(divHeight1);
console.log(divWidth1);

function drawCurve(beginX, beginY, ctrlX, ctrlY, endX, endY) {
  painter1.beginPath();
  painter1.moveTo(beginX, beginY);
  painter1.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
  painter1.strokeStyle = "#AB82FF";
  painter1.lineWidth = 3;
  painter1.stroke();
}

function getX(t,beginX, beginY, ctrlX, ctrlY, endX, endYY) {
  return (1-t)*(1-t)*beginX + 2*(1-t)*t*ctrlX + t*t*endX;
}

function getY(t,beginX, beginY, ctrlX, ctrlY, endX, endY) {
  return (1-t)*(1-t)*beginY + 2*(1-t)*t*ctrlY + t*t*endY;
}

function setDot(timeBegin, timeEnd, beginX, beginY, ctrlX, ctrlY, endX, endY) {
  var t=(time-timeBegin)/(timeEnd-timeBegin);
  var x,y;

  if(time<timeBegin) {
    painter1.fillStyle = "#FF7F00";
    x = beginX;y = beginY
  }
  else if(time>=timeBegin && time<=timeEnd) {
    drawCurve(beginX,beginY,ctrlX,ctrlY,endX,endY);
    painter1.fillStyle = "#00FF00";
    x = getX(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
    y = getY(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
  }
  else if(time>timeEnd && time<=timeEnd+1000) {
    painter1.fillStyle = "#F0F8FF	";
    x= endX;y= endY;
  }

  painter1.beginPath();
  painter1.arc(x, y, 7, 0, 2 * Math.PI);
  painter1.fill();
}

function stopDot(timeBegin, beginX, beginY) {
  if(time<timeBegin) {
    painter1.fillStyle = "#FF7F00";
  }
  else {
    if(time%1000>=500)
      painter1.fillStyle = "#FF0000";
    else
      painter1.fillStyle = "#FFFFFF";
  }
  painter1.beginPath();
  painter1.arc(beginX, beginY, 12, 0, 2 * Math.PI);
  painter1.fill();
}

function set1() {
  painter1.clearRect(0, 0, divWidth1, divHeight1);
  setDot(tb_1,te_1,498,359,506,222,485,122);
  setDot(tb_2,te_2,134,37,239,19,304,480);
  setDot(tb_3,te_3,272,427,493,495,439,23);
  setDot(tb_4,te_4,86,203,291,411,258,298);
  setDot(tb_5,te_5,32,338,526,90,131,126);
  setDot(tb_6,te_6,476,321,47,551,535,12);
  setDot(tb_7,te_7,184,340,444,445,254,418);
  setDot(tb_8,te_8,340,27,484,106,142,16);
  setDot(tb_9,te_9,138,554,41,148,313,90);
  setDot(tb_10,te_10,151,299,487,185,15,424);
  setDot(tb_11,te_11,347,348,162,228,190,174);
  setDot(tb_12,te_12,502,22,54,307,105,138);
  setDot(tb_13,te_13,441,117,24,50,93,62);
  setDot(tb_14,te_14,329,182,83,330,376,12);
  setDot(tb_15,te_15,492,24,16,341,415,467);
  setDot(tb_16,te_16,158,155,214,526,333,378);
  setDot(tb_17,te_17,249,0,213,470,85,47);
  setDot(tb_18,te_18,422,497,380,362,305,306);
  setDot(tb_19,te_19,301,243,294,363,86,164);
  setDot(tb_20,te_20,81,241,170,139,67,344);

  stopDot(tb_21,302,71);
  stopDot(tb_22,287,62);
  stopDot(tb_23,392,140);
  stopDot(tb_24,497,302);
  stopDot(tb_25,5,503);
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
  set1();
  let timeAllocation = document.getElementById('time-allocation');
  let num = `2023 Jan 14th ${Hour} : ${parseInt(time/timeMax*60)} : ${parseInt(time/timeMax*6000%60)}`;
  timeAllocation.value = num;
}, 10);
  
});