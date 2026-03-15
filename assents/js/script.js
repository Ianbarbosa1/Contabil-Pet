/*ABERTURA DO MENU*/
let container = document.querySelector('#menuEstatico');

function openMenu(){
    container.style.display = 'flex'
}
function closeMenu(){
    container.style.display = 'none'
}

/*CONTADOR*/
let contador = document.querySelector('#cont')

/*CONTAINER*/
let primeira = document.querySelector('#one')
let segunda = document.querySelector('#two')
let terceira = document.querySelector('#three')

/*ESQUERDA - VOLTA*/
let se1 = document.querySelector('#se1')

/*DIREITA - IDA*/
let sd3 = document.querySelector('#sd3')

/*IDAS*/
function ida1(){
    primeira.style.display = 'none'
    segunda.style.display = 'flex'

    /*SAI*/
    se1.style.display = 'none'
    sd1.style.display = 'none'

    /*ENTRA*/
    se2.style.display = 'flex'
    sd2.style.display = 'flex'

    contador.innerHTML = '2'
}
function ida2(){
    segunda.style.display = 'none'
    terceira.style.display = 'flex'

    /*SAI*/
    se2.style.display = 'none'
    sd2.style.display = 'none'

    /*ENTRA*/
    se3.style.display = 'flex'
    sd3.style.display = 'flex'

    contador.innerHTML = '3'
}

/*VOLTAS*/
function volta1(){
    primeira.style.display = 'flex'
    segunda.style.display = 'none'

    /*ENTRA*/
    se1.style.display = 'flex'
    sd1.style.display = 'flex'

    /*SAI*/
    se2.style.display = 'none'
    sd2.style.display = 'none'

    contador.innerHTML = '1'
}
function volta2(){
    segunda.style.display = 'flex'
    terceira.style.display = 'none'

    /*ENTRA*/
    se2.style.display = 'flex'
    sd2.style.display = 'flex'

    /*SAI*/
    se3.style.display = 'none'
    sd3.style.display = 'none'

    contador.innerHTML = '2'
}
