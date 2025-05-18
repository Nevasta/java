// função para fazer a comparação entre o número escolhido pelo usuário e o número 10
function Comparação() {
    let n1 = 0;

    // onde se aloca o número escolhido pelo usuário
    n1 = Number(window.prompt("Escolha um número: "));
    
    // onde se faz a comparação para saber se o número é igual, menor ou maior que 10
    if (n1 == 10) {
        alert("O número escolhido é o 10")
    }

    else if (n1 < 10) {
        alert("O número escolhido é menor que 10")
    }

    else if (n1 > 10) {
        alert("O número escolhido é maior que 10")
    }

    // Se não for possível fazer a operação, ou seja, se o usuário não digitar um número, mostra uma mensagem de erro
    else {
        alert("Não foi possível fazer a operação")
    }
    

}
