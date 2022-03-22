let contat;
let yCont;


window.addEventListener("load", function () {
    contat = document.querySelector(".contato");
    yCont = contat.offsetTop;
    yCont -= 50;
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
    
    //percorrendo o email. 
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            quantidade++;
        }
    }

    
    // ----------------VERIFICAÇÃO-----------------------------------
    const qtd_Caracter = 33;
    const ponto = ".";
    const arroba = "@"
    const espaco = " "
    const qtd_caracter_dom = 16;



    // -------------conta quantos arroba tem-----------
    for(let i = 0; i < email.length; i++){
        if(email[i] === arroba){
            qtd_aroba++; 
        }
    }
    let contador = 0; 

    if (email.includes(arroba) &&      //verifica o @ 
        (email.indexOf(arroba) < qtd_Caracter) && //verifica a quantidade de letras
        (email.includes(ponto)) &&  // verifica se contem o ponto 
        (!email.includes(espaco)) && // verifica se tem espaço no email 
        ((email.indexOf(ponto) - 1 - email.indexOf(arroba) - 1) < qtd_caracter_dom)&&
        (qtd_aroba === 1)
    ){
        contador+=1
    }else{
        const mensagem_error = "Email inválido";
        document.getElementById("mensagem_enviar").innerHTML = mensagem_error;
        document.getElementById("mensagem_enviar").classList.remove("verde");
        document.getElementById("mensagem_enviar").classList.add("vermelho");
        
        document.getElementById("botao_ok").classList.remove("desaparece"); 
        document.getElementById("botao_ok").classList.add("aparece"); 
    }
    if (mensagem == false) {
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
    console.log(contador); 
    if(contador === 2){
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
    event.preventDefault(); 

    document.getElementById("mensagem").value = ""; 
    document.getElementById("mensagem_enviar").innerHTML = ""; 
    document.getElementById("botao_ok").classList.remove("aparece"); 
    document.getElementById("botao_ok").classList.add("desaparece");    
    })
