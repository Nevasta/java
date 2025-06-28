function contagem() {
    let resultado = document.getElementById("resultado")

    let numero = prompt("Digite um número para ver a tabuada:")
    numero = Number(numero)
    let contador = 1

    while (contador <= 10) {

    resultado.innerHTML += "<br>" + numero + " x " + contador + " = " + (numero * contador)
    contador = contador + 1 
    }
}

function reset() {
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
}