/*ABERTURA DO MENU*/
let container = document.querySelector('.menu-estatico');
let abrir = document.querySelector('.abrir');
let fechar = document.querySelector('.fechar');
let fecharSobre = document.querySelector('#sb')
let fecharServico = document.querySelector('#sv')
let fecharPergunta = document.querySelector('#pa')
abrir.addEventListener('click', openMenu)
fechar.addEventListener('click', closeMenu)
fecharSobre.addEventListener('click', closeMenu)
fecharServico.addEventListener('click', closeMenu)
fecharPergunta.addEventListener('click', closeMenu)

function openMenu(){
    container.style.display = 'flex'
}
function closeMenu(){
    container.style.display = 'none'
}

/*FUNCIONAMENTO*/
let primeira = document.querySelector('#one')
let segunda = document.querySelector('#two')
let terceira = document.querySelector('#three')

/*ESQUERDA - VOLTA*/
let se1 = document.querySelector('#se1')
let se2 = document.querySelector('#se2')
let se3 = document.querySelector('#se3')

/*DIREITA - IDA*/
let sd1 = document.querySelector('#sd1')
let sd2 = document.querySelector('#sd2')
let sd3 = document.querySelector('#sd3')

sd1.addEventListener('click', ida1)
sd2.addEventListener('click', ida2)
se2.addEventListener('click', volta1)
se3.addEventListener('click', volta2)

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
}

/*VOLTAS*/
function volta1(){
    primeira.style.display = 'flex'
    segunda.style.display = 'none'

    /*SAI*/
    se1.style.display = 'flex'
    sd1.style.display = 'flex'

    /*ENTRA*/
    se2.style.display = 'none'
    sd2.style.display = 'none'
}
function volta2(){
    segunda.style.display = 'flex'
    terceira.style.display = 'none'

    /*SAI*/
    se2.style.display = 'flex'
    sd2.style.display = 'flex'

    /*ENTRA*/
    se3.style.display = 'none'
    sd3.style.display = 'none'
}