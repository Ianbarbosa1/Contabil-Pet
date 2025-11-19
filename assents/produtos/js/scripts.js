let horas = new Date();
let hora = horas.getHours();

let saudacao = ""; 

if(hora >= 6 && hora < 12){
    saudacao = "Bom dia!"
}
else if(hora >= 12 && hora < 18){
    saudacao = "Boa tarde!"
}
else{
    saudacao = "Boa noite!"
}

let textoCompleto = `https://wa.me/5521998382523?text=${saudacao}+gostaria+de+adquirir+a+calculadora+de+precificação.`;
let link = document.querySelector("#link")
link.innerHTML = `<a href="${textoCompleto}">Comprar</a>`;


let textoCompleto2 = `https://wa.me/5521998382523?text=${saudacao}+gostaria+de+adquirir+o+ebook+de+licitação.`;
let link2 = document.querySelector("#link2")
link2.innerHTML = `<a href="${textoCompleto2}">Comprar</a>`;