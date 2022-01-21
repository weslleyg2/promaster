import countdown from "./countdown.js";

const tempoFimDesconto = new countdown("25 january 2022 20:30:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]")
function mostrartempo(){
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoFimDesconto.total[index];
    });
}
mostrartempo();
setInterval(mostrartempo, 1000);