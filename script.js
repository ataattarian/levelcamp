openning_time = Date.parse("jan 23, 2023 00:00:00");

function updateTimer() {
    now = new Date();
    diff = openning_time - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
    .innerHTML =
        '<div>' + d + '<span>روز</span></div>' +
        '<div>' + h + '<span>ساعت</span></div>' +
        '<div>' + m + '<span>دقیقه</span></div>' +
        '<div>' + s + '<span>ثانیه</span></div>';
}

setInterval('updateTimer()', 1000);