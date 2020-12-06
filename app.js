function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let ap = 'AM';

    if (hour > 12) {
        hour = hour - 12;
        ap = 'PM';
    }
    if (hour == 0) {
        hour = 12;
        ap = 'AM'
    }
    if (hour<10) {
        hour = "0" + hour;
    }
    if (minute<10) {
        minute = "0" + minute;
    }
    if (second<10) {
        second = "0" + second;
    }
    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second + " " + ap;
}
showTime();
setInterval(showTime, 1000);