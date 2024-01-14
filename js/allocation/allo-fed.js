document.addEventListener("DOMContentLoaded", function () {

var timeBegin = Date.now(), time;
const timeMax=60000;

const canvas2=document.getElementById('canvas2');
const painter2=canvas2.getContext('2d');

canvas2.width = canvas2.offsetWidth;
canvas2.height = canvas2.offsetHeight;
const divWidth2=canvas2.offsetWidth;
const divHeight2=canvas2.offsetHeight;

console.log(divHeight2);
console.log(divWidth2);

const tb_101=2200, te_101=23600;
const tb_102=3600, te_102=24800;
const tb_103=3400, te_103=25200;
const tb_104=4200, te_104=24800;
const tb_105=4600, te_105=40800;
const tb_106=2000, te_106=40400;
const tb_107=2800, te_107=24200;
const tb_108=2000, te_108=22400;
const tb_109=2400, te_109=31400;
const tb_110=3000, te_110=34800;
const tb_111=3000, te_111=32800;
const tb_112=3400, te_112=21200;
const tb_113=4400, te_113=39600;
const tb_114=2600, te_114=26400;
const tb_115=2400, te_115=38200;
const tb_116=2000, te_116=30400;
const tb_117=2400, te_117=30600;
const tb_118=2600, te_118=23600;
const tb_119=4800, te_119=39000;
const tb_120=2800, te_120=30200;

const tb_121=4400, te_121=25200;
const tb_122=5400, te_122=42000;
const tb_123=25000, te_123=52000;
const tb_124=16600, te_124=36000;
const tb_125=14000, te_125=46000;



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
  painter2.strokeStyle = "#432385";
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

function setDotMarkFed(timeBegin, timeEnd, beginX, beginY, ctrlX, ctrlY, endX, endY, label) {
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

  painter2.fillStyle = "#FF0000"; // 设置文本颜色
  painter2.font = "bold 30px Arial"; // 设置文本字体和大小
  painter2.fillText(label, x - 15, y - 15); 
}

function set2() {
  painter2.clearRect(0, 0, divWidth1, divHeight1);
  setDot(tb_101,te_101,498,359,506,222,485,122);
  setDot(tb_102,te_102,134,37,239,19,304,480);
  setDot(tb_103,te_103,272,427,493,495,439,23);
  setDot(tb_104,te_104,86,203,291,411,258,298);
  setDot(tb_105,te_105,32,338,526,90,131,126);
  setDot(tb_106,te_106,476,321,47,551,535,12);
  setDot(tb_107,te_107,184,340,444,445,254,418);
  setDot(tb_108,te_108,340,27,484,106,142,16);
  setDot(tb_109,te_109,138,554,41,148,313,90);
  setDot(tb_110,te_110,151,299,487,185,15,424);
  setDot(tb_111,te_111,347,348,162,228,190,174);
  setDot(tb_112,te_112,502,22,54,307,105,138);
  setDot(tb_113,te_113,441,117,24,50,93,62);
  setDot(tb_114,te_114,329,182,83,330,376,12);
  setDot(tb_115,te_115,492,24,16,341,415,467);
  setDot(tb_116,te_116,158,155,214,526,333,378);
  setDot(tb_117,te_117,249,0,213,470,85,47);
  setDot(tb_118,te_118,422,497,380,362,305,306);
  setDot(tb_119,te_119,301,243,294,363,86,164);
  setDot(tb_120,te_120,81,241,170,139,67,344);

  setDotMarkFed(tb_121,te_121,302,71,452,116,34,445,"A");
  setDotMarkFed(tb_122,te_122,287,62,72,139,195,343,"B");
  setDotMarkFed(tb_123,te_123,392,140,258,539,238,76,"C");
  setDotMarkFed(tb_124,te_124,497,302,384,554,518,453,"D");
  setDotMarkFed(tb_125,te_125,5,503,327,504,316,337,"E");
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
  set2();
}, 10);
  
});