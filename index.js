function gerarSenha() {
    
    let maiusculas ="ABCDEFGHIJKLMNOPQRSTUVWXYZÇ";
    let minusculas ="abcdefghijklmnopqrstuvwxyzç";
    let numeros="0123456789";
    let caracteres="!@#$%&:.,;*()|^{}[]?";
    let lista = [maiusculas,minusculas,numeros,caracteres].join('').split('');
    
    //let nome = document.getElementById("nome");
    //let tamanho=document.getElementById("tamanho");
    let senha="";

    for (let i = 0; i < 12; i++) {
        senha += lista[parseInt(Math.random()*lista.length)];
    }

    return senha;
    
}

document.querySelector("h3").innerHTML = gerarSenha();