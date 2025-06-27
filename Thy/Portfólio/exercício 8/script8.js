function Estação() {
    let numero = window.prompt("Digite o mês:")
    let num = numero.toUpperCase()

    let Tela = document.querySelector('#resultado');


    if (num == "MARÇO") {
        Tela.innerHTML = `<p>A estação do ano é:Verão/Outono</p>`;
        let Fundo = document.getElementById('Fundo').style.backgroundColor = 'rgb(255, 182, 46)';
        Fundo
    }

    else if (num == "JUNHO") {
        Tela.innerHTML = `<p>A estação do ano é: Outono/Inverno</p>`;
        let Fundo = document.getElementById('Fundo').style.backgroundColor = 'rgb(200, 155, 70)';
        Fundo
    }

    else if (num == "SETEMBRO") {
        Tela.innerHTML = `<p>A estação do ano é: Inverno/Primavera</p>`;
        let Fundo = document.getElementById('Fundo').style.backgroundColor = 'lightblue';
        Fundo
    }
    
    else if (num == "DEZEMBRO") {
        Tela.innerHTML = `<p>A estação do ano é: Primavera/Verão</p>`;
        let Fundo = document.getElementById('Fundo').style.backgroundColor = 'rgb(200, 155, 70)';
        Fundo
    }

    else if (num == "JANEIRO" || num == "FEVEREIRO") {
        Tela.innerHTML = `<p>A estação do ano é: Verão</p>`;
        let Fundo = document.getElementById('Fundo').style.backgroundColor = 'rgb(255, 182, 46)';
        Fundo
    }


    else if (num == "ABRIL" || num == "MAIO") {
        Tela.innerHTML = `<p>A estação do ano é: Outono</p>`;
        let Fundo = document.getElementById('Fundo').style.backgroundColor = 'rgb(222, 169, 71)';
        Fundo
    }


    else if (num == "JULHO" || num == "AGOSTO") {
        Tela.innerHTML = `<p>A estação do ano é: Inverno</p>`;
        let Fundo = document.getElementById('Fundo').style.backgroundColor = 'lightblue';
        Fundo
    }


    else if (num == "OUTUBRO" || num == "NOVEMBRO") {
        Tela.innerHTML = `<p>A estação do ano é: Primavera</p>`;
        let Fundo = document.getElementById('Fundo').style.backgroundColor = 'rgb(200, 155, 70)';
        Fundo
    }

    else {
        alert("Não foi possível identificar qual o mês que você digitou.")
        alert("Tente digitar o nome do mês.")
    }

}