var stTime = 0;
var endTime = 0;
var timerStart;

var min;
var sec;
var milisec;

var startBtn = document.getElementById('StartBtn');
var stopBtn = document.getElementById('StopBtn');
var recordList = document.getElementById('RecordList');
startBtn.addEventListener('click', function () {
    if(this.innerText == 'RECORD' && milisec) {
        console.log(min, sec, milisec);
        var li = document.createElement('li');
        li.style.color = "#fff";
        li.innerText = min + ' : ' + sec + ' : ' + milisec;
        if(!recordList.firstChild) {
            recordList.append(li);
        }
        else {
            recordList.insertBefore(li, recordList.firstChild);
        }
        return false;
    }
    this.innerText = 'RECORD';
    if(!stTime) {
        stTime = Date.now();
    } else {
        stopBtn.innerText = 'STOP';
        stTime += (Date.now() - endTime);
    }
    timerStart = setInterval(function() {
        var nowTime = new Date(Date.now() - stTime);
        min = addZero(nowTime.getMinutes());
        sec = addZero(nowTime.getSeconds());
        milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10));
        document.getElementById('postMinute').innerText = min;
        document.getElementById('postSecond').innerText = sec;
        document.getElementById('postMilisecond').innerText = milisec   
    }, 1)
});
stopBtn.addEventListener('click', function() {
    if(timerStart) {
        clearInterval(timerStart);
        if(this.innerText == 'STOP') {
            endTime = Date.now();
            this.innerText = 'RESET';
            startBtn.innerText = 'RESTART';
        }
        else {
            stTime = 0;
            hour = 0;
            min = 0;
            sec = 0;
            milisec = 0;
            document.getElementById('postMinute').innerText = '00';
            document.getElementById('postSecond').innerText = '00';
            document.getElementById('postMilisecond').innerText = '00';
            startBtn.innerText = 'START';
            this.innerText = 'STOP';
            timerStart = null;
            recordList.innerHTML = '';
        }
    }
});
function addZero(num) {
    return (num < 10 ? '0'+num : ''+num);
}