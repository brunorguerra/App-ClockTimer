let content = $("main #content");
let title = $("header h1");
function appClock() {
  title.html("Relógio");
  content.html(`
    <div class="relogio">
    <div class="circle">
      <div class="center"></div>
      <div class="p_h"></div>
      <div class="p_m"></div>
      <div class="p_s"></div>

      <div class="risco top">12</div>
      <div class="risco left">9</div>
      <div class="risco bottom">6</div>
      <div class="risco right">3</div>
    </div>

    <div class="timeNumber">--:--:--</div>
  </div>`);
}
appClock();
$("header nav ul li:nth-child(1)").click(() => {
  $("header nav ul li:nth-child(2)").removeClass("activePage");
  $("header nav ul li:nth-child(3)").removeClass("activePage");
  $("header nav ul li:nth-child(1)").addClass("activePage");
  appClock();
  updatePage();
});

function appStopwatch() {
  title.html("Cronômetro");
  content.html(`
        <div class="cronometro">
          <div class="timer">
            <span>00:00:00</span>
          </div>
          <div class="btn-timer">
            <button class="stop">Parar</button>
            <button class="start">Iniciar</button>
            <button class="restart">Reiniciar</button>
          </div>
        </div>
    `);
}
$("header nav ul li:nth-child(2)").click(() => {
  $("header nav ul li:nth-child(1)").removeClass("activePage");
  $("header nav ul li:nth-child(3)").removeClass("activePage");
  $("header nav ul li:nth-child(2)").addClass("activePage");
  appStopwatch();
  updatePage();
});
