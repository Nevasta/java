let clicks = 0
let Tela = document.querySelector('#resultado');


function verificaDez(clicks) {
    if (clicks % 10 === 0) {
        return Tela.innerHTML += `<p>(◕‿◕)</p>`;
    }
}


function BotãoMais() {

        clicks += 1
        Tela.innerHTML = `<p>O botão foi apertado: ${clicks} vez(es).</p>`;
        if (clicks % 10 === 0) {
            Tela.innerHTML += `<p>(◕‿◕)</p>`;
    }
    console.log(clicks)
}

function Re() {
    clicks = 0
    Tela.innerHTML = `<p>O botão foi apertado: ${clicks} vez(es). </p>`;
}