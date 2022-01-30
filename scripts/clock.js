let digitalElement = $("main #content .relogio .timeNumber");
let secondElement = $("main #content .relogio .circle .p_s");
let minuteElement = $("main #content .relogio .circle .p_m");
let hourElement = $("main #content .relogio .circle .p_h");

function viewTimeScreen() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  digitalElement.html(`${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`);

  hDeg = (360 / 12) * hour - 90;
  hourElement.css("transform", `rotate(${hDeg}deg)`);
  mDeg = (360 / 60) * minute - 90;
  minuteElement.css("transform", `rotate(${mDeg}deg)`);
  sDeg = (360 / 60) * second - 90;
  secondElement.css("transform", `rotate(${sDeg}deg)`);
}
function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(viewTimeScreen, 1000);
