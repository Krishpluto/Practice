let ampm = document.getElementById('ampm')

function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());

    let ampm = 'AM';
    if (hr >= 12) {
        ampm = 'PM';
        if (hr > 12) {
            hr = hr - 12;
        }
    }

    document.getElementById('hours').innterHTML = padZero(hr)
    document.getElementById('mins').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
    document.getElementById('ampm').innerHTML = ampm; // Update AM/PM
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime, 500)