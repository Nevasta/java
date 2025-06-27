// função para descobrir a idade da pessoa
function somar() {
    let n1 = 0 ;
    let n2 = 0 ;
    let soma = 0 ;

    //onde se aloca o ano de nascimento
    n1 = Number(window.prompt("Digite o seu ano de nascimento: "));

    //variavel que faz a soma para saber a idade
    soma = 2025 - n1
    n2 = 18 - soma

    //onde se faz a comparação para saber se é adequo para tirar a carteira
    if (soma > 18) {
        alert("você já pode tirar a carteira, você tem mais de 18 anos") ;
    }
    else {
        alert("Ainda não é maior de idade, faltam: " + n2 + " ano(s) para tirar a carteira de motorista") ;
    }



}
