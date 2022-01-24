import countdown from "./countdown.js";

const tempoFimDesconto = new countdown("30 april 2022 23:59:59 GMT-0300");
const tempos = document.querySelectorAll("[data-time]")
function mostrartempo(){
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoFimDesconto.total[index];
    });
}
mostrartempo();
setInterval(mostrartempo, 1000);