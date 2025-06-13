//função para fazer calculo e comparação
function somar() {
    let n1 = 0;
    let n2 = 0;

    //onde se faz a entrada dos números para o calculo
    n1 = Number(window.prompt("Digite um número: ")) ;
    n2 = Number(window.prompt("Digite outro número")) ;

    //variavel feita para o resultado
    let soma = n1 + n2

    //comparação do resultado para saber se é maior ou igual ou menor que 10
    if (soma > 10) {
        alert("É maior que 10")
    }
    if (soma == 10) {
        alert("É igual que 10")
    }
    if (soma < 10) {
        alert("É menor que 10")
    }



}
