var timeBegin = Date.now(), time;
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
    }
    progressBar.value=time;
  }

var timer=setInterval(function () {
    let timeDis = document.getElementById('time-dis');
    let num = `14  :  ${(parseInt(time / timeMax * 60)).toString().padStart(2, '0')}`;
    timeSet();
    timeDis.value = num;
}, 10);