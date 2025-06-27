let Inscricoes = 0
let equi = 0

function Cal() {
    equi = Inscricoes
    n1 = 3

    equi = equi / n1
    equi = Math.floor(equi)


}

function Ins() {

    let Quantidade = document.querySelector('#resultado');
    
    Inscricoes += 1

    if (Inscricoes >= 12) {
        Cal()
        Quantidade.innerHTML == `<p>Há ${Inscricoes} inscritos(as). </p>`;
        Quantidade.innerHTML += `<p>Se tem ${equi} equipes. </p>`;

    }

    else {
        Quantidade.innerHTML = `<p>A quantidade minima ainda não foi atingida, há ${Inscricoes} inscrições ocupadas. </p>`;
    }
}
