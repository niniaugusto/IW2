const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lampada')
const bduplo = document.getElementById('bduplo')
const texto = document.getElementById('texto')


function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
    texto.innerHTML ="LIGADA"
}

function lampadaligar(){
    if(!estaQuebrada()){
    lampada.src = "img/ligada.jpg"
    }
    texto.innerHTML ="LIGADA"
}

function lampadadesligada(){
    if(!estaQuebrada()){
    lampada.src = "img/desligada.jpg"
    }
    texto.innerHTML ="DESLIGADA"
}

function lampadaquebrada(){
    lampada.src= "img/quebrada.jpg"
    texto.innerHTML ="QUEBRADA"
}

function ligadesliga() {
    if (bduplo.textContent=='LIGAR'){
        lampadaligar();
        bduplo.textContent='DESLIGAR';
    } 
    
    else{
        lampadadesligada();
        bduplo.textContent='LIGAR';
    }
    texto.innerHTML ="LIGA/DESLIGA"
 
}



ligar.addEventListener('click',lampadaligar)
desligar.addEventListener('click',lampadadesligada)

lampada.addEventListener('mouseover',lampadaligar)
lampada.addEventListener('mouseleave',lampadadesligada)

lampada.addEventListener('dblclick',lampadaquebrada)

bduplo.addEventListener('click',ligadesliga)