let Aleatorio = parseInt(Math.random() * 101);
let Jogador 
let tentativas = 0
let certo = false



function AdNum() {
    
    let resultado = document.querySelector('#resultado');
    
    if (certo == false) {
        Jogador = Number(window.prompt("Digite um número de 0 a 100"));
        if (Jogador > 0 || Jogador  < 101) {

            tentativas += 1

            if (Jogador > Aleatorio) {
                resultado.innerHTML += `<p>Você errou!, tente um número MENOR</p>`;
            }
            else if (Jogador < Aleatorio){
                resultado.innerHTML += `<p>Você errou!, tente um número MAIOR</p>`;
            }

            else {
                resultado.innerHTML += `<b>Parabens!, você acertou, o número era ${Aleatorio}, Suas tentivas foram ${tentativas}</b>`;
                certo = true
            }
            resultado.innerHTML += `<p>Número digitado:${Jogador} </p>`;
        }
    }
    else if (certo == true) {
        alert("Você já acertou o número, reinicie o jogo para tentar novamente.")
    }
}

function Reset() {
    window.location.reload();
}
