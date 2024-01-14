var timeBegin = Date.now(), time;
var Hour = 14;
// 添加事件监听器以允许手动控制进度条
progressBar.addEventListener('input', function () {
    currentTime = parseInt(progressBar.value);
    timeBegin=Date.now()-currentTime;
    time=currentTime;
  });

  function timeSet() {
    time=Date.now()-timeBegin;
  
    if(time>timeMax) {
      currentTime=0;
      timeBegin=Date.now();
      time=0;
      Hour += 1;
    }
    progressBar.value=time;
  }

var timer=setInterval(function () {
    let timePre = document.getElementById('time-pre');
    let num = `2023 Jan 14th ${Hour} : ${parseInt(time/timeMax*60)} : ${parseInt(time/timeMax*6000%60)}`;
    timeSet();
    timePre.value = num;
}, 10);

