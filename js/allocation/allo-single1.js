document.addEventListener("DOMContentLoaded", function () {

var timeBegin = Date.now(), time;
const timeMax=60000;

const canvas3=document.getElementById('canvas3');
const painter3=canvas3.getContext('2d');

canvas3.width = canvas3.offsetWidth;
canvas3.height = canvas3.offsetHeight;
const divWidth1=canvas3.offsetWidth;
const divHeight1=canvas3.offsetHeight;

const tb_1=2200, te_1=23600;
const tb_2=3600, te_2=24800;
const tb_3=3400, te_3=25200;
const tb_4=4200, te_4=24800;
const tb_5=4600, te_5=40800;
const tb_6=2000, te_6=40400;
const tb_7=2800, te_7=24200;
const tb_8=2000, te_8=22400;
const tb_9=2400, te_9=31400;
const tb_10=3000, te_10=34800;
const tb_11=3000, te_11=32800;
const tb_12=3400, te_12=21200;
const tb_13=4400, te_13=39600;
const tb_14=2600, te_14=26400;
const tb_15=2400, te_15=38200;
const tb_16=2000, te_16=30400;
const tb_17=2400, te_17=30600;
const tb_18=2600, te_18=23600;
const tb_19=4800, te_19=39000;
const tb_20=2800, te_20=30200;

const tb_21=7000;
const tb_22=7000;
const tb_23=8200;
const tb_24=7800;
const tb_25=7800;

const progressBar = document.getElementById('timeControl-allocation');
// 添加事件监听器以允许手动控制进度条
progressBar.addEventListener('input', function () {
  currentTime = parseInt(progressBar.value);
  timeBegin=Date.now()-currentTime;
  time=currentTime;
});

function drawCurve(beginX, beginY, ctrlX, ctrlY, endX, endY) {
  painter3.beginPath();
  painter3.moveTo(beginX, beginY);
  painter3.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
  painter3.strokeStyle = "#432385";
  painter3.lineWidth = 3;
  painter3.stroke();
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
    painter3.fillStyle = "#FF7F00";
    x = beginX;y = beginY
  }
  else if(time>=timeBegin && time<=timeEnd) {
    drawCurve(beginX,beginY,ctrlX,ctrlY,endX,endY);
    painter3.fillStyle = "#00FF00";
    x = getX(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
    y = getY(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
  }
  else if(time>timeEnd && time<=timeEnd+1000) {
    painter3.fillStyle = "#F0F8FF	";
    x= endX;y= endY;
  }

  painter3.beginPath();
  painter3.arc(x, y, 7, 0, 2 * Math.PI);
  painter3.fill();
}

function setDotMarkSin(timeBegin, beginX, beginY, label) {
  if(time<timeBegin) {
    painter3.fillStyle = "#FF7F00";
  }
  else {
    if(time%1000>=500)
      painter3.fillStyle = "#FF0000";
    else
      painter3.fillStyle = "#FFFFFF";
  }
  painter3.beginPath();
  painter3.arc(beginX, beginY, 12, 0, 2 * Math.PI);
  painter3.fill();

  painter3.fillStyle = "#FF0000"; // 设置文本颜色
  painter3.font = "bold 30px Arial"; // 设置文本字体和大小
  painter3.fillText(label, beginX - 15, beginY - 15); 
}

function set1() {
  painter3.clearRect(0, 0, divWidth1, divHeight1);
  console.log(divWidth1,divHeight1);
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

  setDotMarkSin(tb_21,302,71,"A");
  setDotMarkSin(tb_22,287,62,"B");
  setDotMarkSin(tb_23,392,140,"C");
  setDotMarkSin(tb_24,497,302,"D");
  setDotMarkSin(tb_25,5,503,"E");
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

  let timeAllo = document.getElementById('time-allocation');
  let num = `2023-01-14  14:${(parseInt(time / timeMax * 60)).toString().padStart(2, '0')}:${(parseInt(time / timeMax * 6000 % 60)).toString().padStart(2, '0')}`;
  timeAllo.value = num;
}, 10);

});