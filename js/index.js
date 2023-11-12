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
    if (tamanho >= 8 && tamanho <= 30) {
        for (let i = 0; i < tamanho; i++) {
            senha += lista[parseInt(Math.random()*lista.length)];
        }
    
        Senhas.push([nome,senha]);
        atualizarTabela();
        return;
    }else{
        
        alert("O tamanho da senha deve ser entre 8 e 30 caracteres.");
    }
    
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
    const senhaDiv = document.querySelector("#senhas")

    const opitions = {
        filename: "Mercado_lista.pdf",
        margin: 15,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    html2pdf().set(opitions).from(senhaDiv).save();
})