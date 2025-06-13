function CalMe() {
    let n1 = Number(window.prompt("Digite sua nota"));
    let n2 = Number(window.prompt("Digite sua nota"));
    let n3 = Number(window.prompt("Digite sua nota"));


    let media = (n1 + n2 + n3) / 3;

    let resultado = document.querySelector('#resultado');


    if (media < 6 ) {
        let med = 6 - media
        resultado.innerHTML = `<p>Reprovado <p/> <p>Faltam ${med} pontos para passar de ano<p/>`
        
    }
    else if (media >= 6) {
        resultado.innerHTML = `<p>Aprovado <p/> <p>O resultado é ${media},você passou de ano<p/>`;
    }
}