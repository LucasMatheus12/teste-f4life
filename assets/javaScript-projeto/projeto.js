let contat;
let yCont;


window.addEventListener("load", function () {
    contat = document.querySelector(".contato");
    yCont = contat.offsetTop;
    yCont -= 0;
});



window.addEventListener("scroll", function () {

    let navBar = document.querySelector(".cabecalho__nav-bar");
    navBar.classList.toggle("indica_quem-somos", window.scrollY > 550 && window.scrollY < 1200);

    navBar.classList.toggle("indica_servicos", window.scrollY > 1200 && window.scrollY < 1800);

    navBar.classList.toggle("indica_contato", window.scrollY > 1800 && window.scrollY < yCont);
});

// -------------------------- FORMULÁRIO ----------------------


const botao = document.getElementById("botao__enviar");
const botao_ok = document.getElementById("botao_ok");

// -----------------------FORMULÁRIO VERIFICA---------------------------
botao.addEventListener('click', event => {
    event.preventDefault();
    let mensagem = document.getElementById("mensagem").value;
    let email = document.getElementById("email").value;

    let quantidade = 0;
    let qtd_aroba = 0;
    let qtd_elementos = 0;

    //percorrendo o email. 
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            quantidade++;
        }
    }


    // ----------------VERIFICAÇÃO-----------------------------------
    const qtd_Caracter = 33;
    const ponto = ".";
    const arroba = "@";
    const espaco = " ";
    const qtd_caracter_dom = 16;
    const elementos = "*&¨%$#!-+§{}[]?;><,'" + '"^~';


    // -------------conta quantos arroba tem-----------
    for (let i = 0; i < email.length; i++) {
        if (email[i] === arroba) {
            qtd_aroba++;
        }
    }

    //--------------- compara com elementos de caracteres especiais -----------

    for (let i = 0; i < email.length; i++) {
        for (let j = 0; j < elementos.length; j++) {
            if (email[i] === elementos[j]) {
                qtd_elementos++;
            }
        }
    }

    let contador = 0;
    
    if (email.includes(arroba) &&      //verifica o @ 
        (email.indexOf(arroba) < qtd_Caracter) && //verifica a quantidade de letras
        (email.includes(ponto)) &&  // verifica se contem o ponto 
        (!email.includes(espaco)) && // verifica se tem espaço no email 
        ((email.indexOf(ponto) - 1 - email.indexOf(arroba) - 1) < qtd_caracter_dom) && // verifica se no dominio tem mais de 16 caracteres
        (qtd_aroba === 1) && //verifica quantidade de arroba no email 
        (qtd_elementos === 0) && // verifica se tem caractere especial que tem no email 
        (email[email.length - 1] !== ponto) && //verifica se tem ponto no final do email.
        ((email[email.indexOf(arroba) + 1]) !== ponto)&& //verifica 
        ((email[email.indexOf(arroba) - 1]) !== ponto)
        
    ) {
        contador += 1

    } else {
        //exibe a mensagem: email inválido se para nas condiões de verificação. 

        const mensagem_error = "Email inválido";
        document.getElementById("mensagem_enviar").innerHTML = mensagem_error;
        document.getElementById("mensagem_enviar").classList.remove("verde");
        document.getElementById("mensagem_enviar").classList.add("vermelho");

        document.getElementById("botao_ok").classList.remove("desaparece");
        document.getElementById("botao_ok").classList.add("aparece");
    }

    if (mensagem == false) {
        //exibe a mensagem "erro no envio: insira uma mensagem", caso a condição de não ter nada no campo da mensagem. 

        document.getElementById("mensagem").classList.add("env");
        const mensagem = "Erro no envio: Insira uma mensagem";
        document.getElementById("mensagem_enviar").innerHTML = mensagem;
        document.getElementById("mensagem_enviar").classList.remove("verde");
        document.getElementById("mensagem_enviar").classList.add("vermelho");

        document.getElementById("botao_ok").classList.remove("desaparece");
        document.getElementById("botao_ok").classList.add("aparece");
    } else {

        contador += 1;
    }

    if (contador === 2) {

        //se todas as condições forem válidaas exibe a mensagem: "Obrigado pelo o contato"

        const usuario = email.substr(0, email.indexOf(arroba));
        const mensagem_valida = `Obrigado pelo contato, ${usuario}!`
        document.getElementById("mensagem_enviar").innerHTML = mensagem_valida;
        document.getElementById("mensagem_enviar").classList.remove("vermelho");
        document.getElementById("mensagem_enviar").classList.add("verde");

        document.getElementById("botao_ok").classList.remove("desaparece");
        document.getElementById("botao_ok").classList.add("aparece");

    }
})

botao_ok.addEventListener('click', event => {

    //função anônima para a criação do botão "ok" que exibe ao lado da mensagem de erro ou de acerto.  

    event.preventDefault();

    document.getElementById("mensagem").value = "";
    document.getElementById("mensagem_enviar").innerHTML = "";
    document.getElementById("botao_ok").classList.remove("aparece");
    document.getElementById("botao_ok").classList.add("desaparece");
})
