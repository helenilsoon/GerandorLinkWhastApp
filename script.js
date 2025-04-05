
function gerarLink() {
    let input = document.getElementById("inputLink").value;
    
    let match = input.match(/phone=%2B(\d+)&text=([^&]*)/);
    if (match) {
        let numero = match[1];
        let mensagem = decodeURIComponent(match[2]);

        document.getElementById("numero").innerText = numero;
        document.getElementById("mensagem").innerText = mensagem;
        
        document.getElementById("resultado").style.display = "block";
        document.getElementById("btnWhatsApp").setAttribute("data-url", `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
        document.getElementById("link").innerHTML = `<p>Link:</p><a href="https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}" target="_blank">https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}</a>`;
        console.log(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
    }
}

function gerarLinkManual() {
    let codigoPais = document.getElementById("pais").value;
    let numero = document.getElementById("numeroTelefone").value.replace(/\D/g, '');
    let mensagem = document.getElementById("mensagemOpcional").value;
    let numeroError = document.getElementById("number-error");
    

    if (!numero || numero.length !== 11) {
        numeroError.innerText = "Número inválido. Por favor, insira um número de telefone válido.";
        numeroError.style.display = "block";
        if (document.getElementById("resultado").style.display === "block") {
            document.getElementById("resultado").style.display = "none";
        }
      
        return;
    }
    
    let numeroCompleto = codigoPais + numero;
    document.getElementById("numero").innerHTML =  `<a href="https://wa.me/${numeroCompleto}">${numeroCompleto}</a>`;
    document.getElementById("mensagem").innerText = mensagem ? mensagem : "(Sem mensagem)";
    if(numeroError && numeroError.style.display === "block") {
        numeroError.style.display = "none";
    }

    document.getElementById("resultado").style.display = "block";
    document.getElementById("btnWhatsApp").setAttribute("data-url", `https://wa.me/${numeroCompleto}?text=${encodeURIComponent(mensagem)}`);
    
    document.getElementById("link").innerHTML = `<p>Link:</p><a href="https://wa.me/${numeroCompleto}?text=${encodeURIComponent(mensagem)}" target="_blank">https://wa.me/${numeroCompleto}?text=${encodeURIComponent(mensagem)}</a>`;

}

function abrirWhatsApp() {
    let url = document.getElementById("btnWhatsApp").getAttribute("data-url");
    if (url) {
        window.location.href=url;
    }
    
}

function limparCampos() {
   // document.getElementById("inputLink").value = "";
    document.getElementById("numeroTelefone").value = "";
    document.getElementById("mensagemOpcional").value = "";
    document.getElementById("resultado").style.display = "none";
    if (document.getElementById("number-error").style.display === "block") {
        document.getElementById("number-error").style.display = "none";
    }
}
