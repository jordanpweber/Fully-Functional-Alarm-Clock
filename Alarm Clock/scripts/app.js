'use strict';

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('time').innerText = `${hours}:${minutes}`;
}

function setAlarm() {
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        alert('Please enter valid hours and minutes')
        return;
    }

    const now = new Date();
    const alarmTime = new Date;
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(0);

    const alarmStatus = document.getElementById('alarm-status');
    if (alarmTime > now) {
        alarmStatus.innerText = `Alarm set for ${hours}:${minutes}`;
    }else {
        alarmStatus.innerText = 'Alarm time has already passed';
    }

    setInterval(checkAlarm, 1000, alarmTime);
}

function checkAlarm(alarmTime) {
    const now = new Date();
    if (now.getHours() === alarmTime.getHours() && now.getMinutes() === alarmTime.getMinutes()) {
        document.getElementById('alarm-sound').play();
        document.getElementById('alarm-status').innerText = 'Alarm is going off!'
    }
}

setInterval(updateTime, 1000);