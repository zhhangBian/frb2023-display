document.addEventListener("DOMContentLoaded", function () {

var timeBegin = Date.now(), time;
const timeMax=30000;

const canvas2=document.getElementById('canvas2');
const painter2=canvas2.getContext('2d');

canvas2.width = canvas2.offsetWidth;
canvas2.height = canvas2.offsetHeight;
const divWidth2=canvas2.offsetWidth;
const divHeight2=canvas2.offsetHeight;

console.log(divHeight2);
console.log(divWidth2);

const tb_31=1100, te_31=11800;
const tb_32=1800, te_32=12400;
const tb_33=1700, te_33=12600;
const tb_34=2100, te_34=12400;
const tb_35=2300, te_35=20400;
const tb_36=1000, te_36=20200;
const tb_37=1400, te_37=12100;
const tb_38=1000, te_38=11200;
const tb_39=1200, te_39=15700;
const tb_40=1500, te_40=17400;
const tb_41=1500, te_41=16400;
const tb_42=1700, te_42=10600;
const tb_43=2200, te_43=19800;
const tb_44=1300, te_44=13200;
const tb_45=1200, te_45=19100;
const tb_46=1000, te_46=15200;
const tb_47=1200, te_47=15300;
const tb_48=1300, te_48=11800;
const tb_49=2400, te_49=19500;
const tb_50=1400, te_50=15100;

const tb_51=2200, te_51=12600;
const tb_52=2700, te_52=21000;
const tb_53=12500, te_53=26000;
const tb_54=8300, te_54=18000;
const tb_55=7000, te_55=23000;


const progressBar = document.getElementById('timeControl-allocation');
// 添加事件监听器以允许手动控制进度条
progressBar.addEventListener('input', function () {
  currentTime = parseInt(progressBar.value);
  timeBegin=Date.now()-currentTime;
  time=currentTime;
});

canvas2.width = canvas2.offsetWidth;
canvas2.height = canvas2.offsetHeight;
const divWidth1=canvas2.offsetWidth;
const divHeight1=canvas2.offsetHeight;

function drawCurve(beginX, beginY, ctrlX, ctrlY, endX, endY) {
  painter2.beginPath();
  painter2.moveTo(beginX, beginY);
  painter2.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
  painter2.strokeStyle = "#AB82FF";
  painter2.lineWidth = 3;
  painter2.stroke();
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
    painter2.fillStyle = "#FF7F00";
    x = beginX;y = beginY
  }
  else if(time>=timeBegin && time<=timeEnd) {
    drawCurve(beginX,beginY,ctrlX,ctrlY,endX,endY);
    painter2.fillStyle = "#00FF00";
    x = getX(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
    y = getY(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
  }
  else if(time>timeEnd && time<=timeEnd+1000) {
    painter2.fillStyle = "#F0F8FF	";
    x= endX;y= endY;
  }

  painter2.beginPath();
  painter2.arc(x, y, 7, 0, 2 * Math.PI);
  painter2.fill();
}

function fdeDot(timeBegin, timeEnd, beginX, beginY, ctrlX, ctrlY, endX, endY) {
  var t=(time-timeBegin)/(timeEnd-timeBegin);
  var x,y;

  if(time<timeBegin) {
    painter2.fillStyle = "#FF7F00";
    x = beginX;y = beginY
  }
  else if(time>=timeBegin && time<=timeEnd) {
    drawCurve(beginX,beginY,ctrlX,ctrlY,endX,endY);
    painter2.fillStyle = "#FFFF00";
    x = getX(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
    y = getY(t,beginX,beginY,ctrlX,ctrlY,endX,endY);
  }
  else if(time>timeEnd && time<=timeEnd+1000) {
    painter2.fillStyle = "#F0F8FF	";
    x= endX;y= endY;
  }

  painter2.beginPath();
  painter2.arc(x, y, 12, 0, 2 * Math.PI);
  painter2.fill();
}

function set1() {
  painter2.clearRect(0, 0, divWidth1, divHeight1);
  setDot(tb_31,te_31,498,359,506,222,485,122);
  setDot(tb_32,te_32,134,37,239,19,304,480);
  setDot(tb_33,te_33,272,427,493,495,439,23);
  setDot(tb_34,te_34,86,203,291,411,258,298);
  setDot(tb_35,te_35,32,338,526,90,131,126);
  setDot(tb_36,te_36,476,321,47,551,535,12);
  setDot(tb_37,te_37,184,340,444,445,254,418);
  setDot(tb_38,te_38,340,27,484,106,142,16);
  setDot(tb_39,te_39,138,554,41,148,313,90);
  setDot(tb_40,te_40,151,299,487,185,15,424);
  setDot(tb_41,te_41,347,348,162,228,190,174);
  setDot(tb_42,te_42,502,22,54,307,105,138);
  setDot(tb_43,te_43,441,117,24,50,93,62);
  setDot(tb_44,te_44,329,182,83,330,376,12);
  setDot(tb_45,te_45,492,24,16,341,415,467);
  setDot(tb_46,te_46,158,155,214,526,333,378);
  setDot(tb_47,te_47,249,0,213,470,85,47);
  setDot(tb_48,te_48,422,497,380,362,305,306);
  setDot(tb_49,te_49,301,243,294,363,86,164);
  setDot(tb_50,te_50,81,241,170,139,67,344);

  fdeDot(tb_51,te_51,302,71,452,116,34,445,);
  fdeDot(tb_52,te_52,287,62,72,139,195,343,);
  fdeDot(tb_53,te_53,392,140,258,539,238,76,);
  fdeDot(tb_54,te_54,497,302,384,554,518,453,);
  fdeDot(tb_55,te_55,5,503,327,504,316,337,);
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

var timer=setInterval(function () {
  timeSet();
  set1();
}, 10);
  
  });