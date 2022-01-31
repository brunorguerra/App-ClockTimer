function updatePage() {
  // Relógio
  let digitalElement = $("main #content .relogio .timeNumber");
  let secondElement = $("main #content .relogio .circle .p_s");
  let minuteElement = $("main #content .relogio .circle .p_m");
  let hourElement = $("main #content .relogio .circle .p_h");

  function viewTimeScreen() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    digitalElement.html(
      `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
    );

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

  viewTimeScreen();
  setInterval(viewTimeScreen, 1000);

  // Cronômetro
  let timerStopwatch = $("main #content .cronometro .timer span");
  let hourStopwatch = 0;
  let minuteStopwatch = 0;
  let secondStopwatch = 0;

  function updateTimerStopwatch() {
    if (secondStopwatch >= 60) {
      secondStopwatch = 0;
      minuteStopwatch++;
    }
    if (minuteStopwatch >= 60) {
      minuteStopwatch = 0;
      hourStopwatch++;
    }
    if (hourStopwatch > 24) {
      hourStopwatch = 0;
      minuteStopwatch = 0;
      secondStopwatch = 0;
      stopTimerStopwatch();
    }
    secondStopwatch++;

    timerStopwatch.html(
      `${fixZero(hourStopwatch)}:${fixZero(minuteStopwatch)}:${fixZero(
        secondStopwatch
      )}`
    );
  }
  let interval;

  // Button start stopwatch
  $("main #content .cronometro .btn-timer button.start").click(() => {
    interval = setInterval(updateTimerStopwatch, 1000);
    $("main #content .cronometro .btn-timer button.start").css(
      "display",
      "none"
    );
    $("main #content .cronometro .btn-timer button.stop").css(
      "display",
      "inline-block"
    );
    $("main #content .cronometro .btn-timer button.restart").css(
      "display",
      "inline-block"
    );
  });
  // Button stop stopwatch
  $("main #content .cronometro .btn-timer button.stop").click(() => {
    clearInterval(interval);

    $("main #content .cronometro .btn-timer button.start")
      .css("display", "inline-block")
      .html("Continuar");
    $("main #content .cronometro .btn-timer button.restart").css(
      "display",
      "inline-block"
    );
    $("main #content .cronometro .btn-timer button.stop").css(
      "display",
      "none"
    );
  });
  // Button restart stopwatch
  $("main #content .cronometro .btn-timer button.restart").click(() => {
    clearInterval(interval);
    timerStopwatch.html("00:00:00");
    hourStopwatch = 0;
    minuteStopwatch = 0;
    secondStopwatch = 0;

    $("main #content .cronometro .btn-timer button.start")
      .css("display", "inline-block")
      .html("Iniciar");
    $("main #content .cronometro .btn-timer button.stop").css(
      "display",
      "none"
    );
    $("main #content .cronometro .btn-timer button.restart").css(
      "display",
      "none"
    );
  });
}

updatePage();
