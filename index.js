let Senhas = [];

function gerarSenha() {
    
    let maiusculas ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let minusculas ="abcdefghijklmnopqrstuvwxyz";
    let numeros="0123456789";
    let caracteres="!@#$%&:.,;*()|^{}[]?";
    let lista = [maiusculas,minusculas,numeros,caracteres].join('').split('');
    
    let nome = document.getElementById("nome").value;
    let tamanho=document.getElementById("tamanho").value;
    let senha="";
    
    for (let i = 0; i < tamanho; i++) {
        senha += lista[parseInt(Math.random()*lista.length)];
    }

    Senhas.push([nome,senha]);
    atualizarTabela();
}

function atualizarTabela() {
    let tbody = document.getElementById("tabelaSenhas");
    tbody.innerHTML = "";

    for (let i = 0; i < Senhas.length; i++) {
        let linha = tbody.insertRow();
        let celula1 = linha.insertCell(0);
        let celula2 = linha.insertCell(1);
        celula1.innerHTML = Senhas[i][0];
        celula2.innerHTML = Senhas[i][1];
    }
}


const btngerar = document.querySelector("#gerarpdf");

btngerar.addEventListener("click", ()=>{
    const content = document.querySelector("#senhas")

    const opitions = {
        margin: [10,10,10,10],
        filename: "Mercado_lista.pdf"
    }

    html2pdf().set(opitions).from(content).save();
})