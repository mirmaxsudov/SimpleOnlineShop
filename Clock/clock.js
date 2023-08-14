function getTime() {
    let hour = String(new Date().getHours()).padStart(2, '0');
    let minute = String(new Date().getMinutes()).padStart(2, '0');
    let second = String(new Date().getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = hour + ':' + minute + ':' + second;
}

setInterval(getTime, 1000);
getTime();