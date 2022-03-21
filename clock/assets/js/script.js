
function clock() {
  var hour = document.getElementById("hour");
  var minute = document.getElementById("minute");
  var seconds = document.getElementById("seconds");
  var hour_now = new Date().getHours();
  var minute_now = new Date().getMinutes();
  var seconds_now = new Date().getSeconds();
  hour.innerHTML = hour_now + ":";
  minute.innerHTML = minute_now + ":";
  seconds.innerHTML = seconds_now;

  if (hour_now >= 0 && hour_now < 10) {
    hour.innerHTML = "0" + hour_now;
  }
  if (minute_now >= 0 && minute_now < 10) {
    minute.innerHTML = "0" + minute_now;
  }
  if (seconds_now >= 0 && seconds_now < 10) {
    seconds.innerHTML = "0" + seconds_now;
  }

  var change = document.getElementById("title_hello");
  if (hour_now >= 0 && hour_now < 12) {
    change.innerHTML = `<h2 style="color: yellow">Chào buổi Sáng</h2>`;
  } else if (hour_now < 17) {
    change.innerHTML = `<h2 style="color: red">Chào buổi chiều</h2>`;
  } else {
    change.innerHTML = `<h2 style="color: Violet">Chào buổi tối</h2>`;
  }
}
var Dem_gio = setInterval(clock, 1000);
