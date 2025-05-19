// função de calculadora, onde o usuário escolhe a operação que deseja fazer
function Calculadora() {

    // variaveis que alocam os números, resultado e a operação escolhida
    let n1 = 0;
    let n2 = 0;
    let resu = 0;
    let seletor = 0;

    // pergunta ao usuário qual operação ele deseja fazer
    seletor = window.prompt("Escolha o número da sua operação: (1).Multiplicação, (2).Divisão, (3).Adição ou (4).Subtração");

    // onde se faz a comparação para saber qual operação o usuário escolheu, se for multiplicação, executa a operação de multiplicar
    if (seletor == 1) {
        n1 = Number(window.prompt("Digite o primeiro número"));
        n2 = Number(window.prompt("Digite o segundo número"));
        resu = n1 * n2;

        function CheckEvenOrOdd(resu) {
            if (resu % 2 == 0)
            {
                alert("O número " + resu + " é par.");
            }
             else
            {
                alert("O número " + resu + " é ímpar.");
            }

        }
        CheckEvenOrOdd(resu);
    }

    // se o usuário escolher divisão, executa a operação de dividir
    else if (seletor == 2) {
        n1 = Number(window.prompt("Digite o primeiro número"));
        n2 = Number(window.prompt("Digite o segundo número"));
        resu = n1 / n2

        function CheckEvenOrOdd(resu) {
            if (resu % 2 == 0)
            {
                alert("O número " + resu + " é par.");
            }
             else
            {
                alert("O número " + resu + " é ímpar.");
            }

        }
        CheckEvenOrOdd(resu);
    }

    // se o usuário escolher adição, executa a operação de somar
    else if (seletor == 3) {
        n1 = Number(window.prompt("Digite o primeiro número"));
        n2 = Number(window.prompt("Digite o segundo número"));
        resu = n1 + n2

        function CheckEvenOrOdd(resu) {
            if (resu % 2 == 0)
            {
                alert("O número " + resu + " é par.");
            }
             else
            {
                alert("O número " + resu + " é ímpar.");
            }

        }
        CheckEvenOrOdd(resu);
    }

    // se o usuário escolher subtração, executa a operação de subtrair
    else if (seletor == 4) {
        n1 = Number(window.prompt("Digite o primeiro número"));
        n2 = Number(window.prompt("Digite o segundo número"));
        resu = n1 - n2
        
        function CheckEvenOrOdd(resu) {
            if (resu % 2 == 0)
            {
                alert("O número " + resu + " é par.");
            }
             else
            {
                alert("O número " + resu + " é ímpar.");
            }

        }
        CheckEvenOrOdd(resu);
    }

    // se o usuário não escolher nenhuma das operações, mostra uma mensagem de erro
    else {
        alert("Não é possível fazer a operação.");
    }








}