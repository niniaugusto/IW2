const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')

function estaQuebrada(){
    return lampada.src.indexOf('quebrada')> -1
}


function lampDesligada(){
    if(!estaQuebrada()){
        lampada.src= "img/desligada.jpg"
    }
}
function lampLigada(){
    if(!estaQuebrada()){
        lampada.src= "img/ligada.jpg"
    }
}
function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
}

ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)

lampada.addEventListener('dblclick',lampQuebrada)