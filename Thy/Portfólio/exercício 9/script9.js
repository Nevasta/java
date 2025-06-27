
function dif(numero,num) {
    return Math.abs(numero - num) === 10
}


function Comp() {
    let numero = window.prompt("Digite um número:")
    let num = window.prompt("Digite outro número:")

    let Tela = document.querySelector('#resultado');

    if (numero != num && numero > num && dif(numero,num)) {
        Tela.innerHTML = `<p>O número ${numero} é maior que o ${num}</p>`
        Tela.innerHTML += `<p>"A cada amanhecer, nasce uma nova chance de recomeçar. Você é mais forte do que imagina — acredite e vá! 💪✨"</p>`
    }

    else if (numero != num && numero > num) {
        Tela.innerHTML = `<p>O número ${numero} é maior que o número ${num}</p>`
    }

    else if (numero != num && numero < num && dif(numero,num)) {
        Tela.innerHTML = `<p>O número ${numero} é menor que o número ${num}</p>`
        Tela.innerHTML += `<p>"A cada amanhecer, nasce uma nova chance de recomeçar. Você é mais forte do que imagina — acredite e vá! 💪✨"</p>`
    }

    else if (numero != num && numero < num) {
        Tela.innerHTML = `<p>O número ${numero} é menor que o número ${num}</p>`
    }

    else if (numero == num && dif(numero,num)) {
        Tela.innerHTML = `<p>O número ${numero} é igual ao número ${num}</p>`
        Tela.innerHTML += `<p>"A cada amanhecer, nasce uma nova chance de recomeçar. Você é mais forte do que imagina — acredite e vá! 💪✨"</p>`
    }

    else if (numero == num) {
        Tela.innerHTML = `<p>O número ${numero} é igual ao número ${num}</p>`
    }

    else {
        alert("Não foi possível fazer a operação")
    }

}