var jresultado = document.getElementById('jresultado')



var jogador = 0
var rempate = 0
var pc = 0

var jplacar = document.getElementById('jplacar')
var empate = document.getElementById('empate')
var pplacar = document.getElementById('pplacar')




function apostapc(){
    var num = Math.floor(Math.random() * 3);
    var presultado = document.getElementById('presultado')

    if ( num == 0){
        presultado.style.backgroundImage = 'url(pedra.png)'

    }

    if (num == 1){
        presultado.style.backgroundImage = 'url(papel.png)'
    }

    if (num == 2){
        presultado.style.backgroundImage = 'url(tesoura.png)'
    }
    
    return num;
}


function pedra(){
    
    jresultado.style.backgroundImage = 'url(pedra.png)'

    var res = apostapc()
    
    

    if( res == 0){
        rempate ++
        jplacar.innerHTML = jogador
        empate.innerText = rempate
        pplacar.innerHTML = pc
        
    }
    
    if (res == 1){
        pc ++
        jplacar.innerHTML = jogador
        empate.innerText = rempate
        pplacar.innerHTML = pc
    }
    if (res == 2){
        jogador ++
        jplacar.innerHTML = jogador
        empate.innerText = rempate
        pplacar.innerHTML = pc
    }

    
}

function papel(){
    
    jresultado.style.backgroundImage = 'url(papel.png)'

    var res = apostapc()
    
    

    if( res == 0){
        jogador ++
        jplacar.innerHTML = jogador
        empate.innerText = rempate
        pplacar.innerHTML = pc
        
    }
    
    if (res == 1){
        rempate ++
        jplacar.innerHTML = jogador
        empate.innerText = rempate
        pplacar.innerHTML = pc
    }
    if (res == 2){
        pc ++
        jplacar.innerHTML = jogador
        empate.innerText = rempate
        pplacar.innerHTML = pc
    }

    
}
function tesoura(){
    
    jresultado.style.backgroundImage = 'url(tesoura.png)'

    var res = apostapc()
    
    

    if( res == 0){
        pc ++
        jplacar.innerHTML = jogador
        empate.innerText = rempate
        pplacar.innerHTML = pc
        
    }
    
    if (res == 1){
        jogador ++
        jplacar.innerHTML = jogador
        empate.innerText = rempate
        pplacar.innerHTML = pc
    }
    if (res == 2){
        rempate ++
        jplacar.innerHTML = jogador
        empate.innerText = rempate
        pplacar.innerHTML = pc
    }

    
}

