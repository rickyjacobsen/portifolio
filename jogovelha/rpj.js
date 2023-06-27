
/* comunicação com o visual */
let a111 = document.getElementById('a1')
let a222 = document.getElementById('a2')
let a333 = document.getElementById('a3')
let b111 = document.getElementById('b1')
let b222 = document.getElementById('b2')
let b333 = document.getElementById('b3')
let c111 = document.getElementById('c1')
let c222 = document.getElementById('c2')
let c333 = document.getElementById('c3')

let resB = document.getElementById('resB')
let resX = document.getElementById('resX')



/* identificar se já foi marcado e se três na mesma posição 

1 bolinha
2 xis
*/
let cont = 0
let a11 = 0
let a22 = 0
let a33 = 0
let b11 = 0
let b22 = 0
let b33 = 0
let c11 = 0
let c22 = 0
let c33 = 0

let totalB = 0
let totalX = 0


/* vai mostrar o placar */

resB.innerHTML = totalB
resX.innerHTML = totalX

/* função novo jogo */

function novoJogo(){
    cont = 0
    a11 = 0
    a22 = 0
    a33 = 0
    b11 = 0
    b22 = 0
    b33 = 0
    c11 = 0
    c22 = 0
    c33 = 0

    a111.style.backgroundImage =''
    a222.style.backgroundImage =''
    a333.style.backgroundImage =''
    b111.style.backgroundImage =''
    b222.style.backgroundImage =''
    b333.style.backgroundImage =''
    c111.style.backgroundImage =''
    c222.style.backgroundImage =''
    c333.style.backgroundImage =''

    a111.style.backgroundColor = '#A9D9D0'
    a222.style.backgroundColor = '#A9D9D0'
    a333.style.backgroundColor = '#A9D9D0'
    b111.style.backgroundColor = '#A9D9D0'
    b222.style.backgroundColor = '#A9D9D0'
    b333.style.backgroundColor = '#A9D9D0'
    c111.style.backgroundColor = '#A9D9D0'
    c222.style.backgroundColor = '#A9D9D0'
    c333.style.backgroundColor = '#A9D9D0'


}



/* função de cada quadrado */

function ganhou(){
    if(a11 == 1 && a22 == 1 && a33 == 1){
        a111.style.backgroundColor = 'white'
        a222.style.backgroundColor = 'white'
        a333.style.backgroundColor = 'white'
        
        totalB++
        resB.innerHTML = totalB

        setTimeout(novoJogo, 1000);
    }
    if(b11 == 1 && b22 == 1 && b33 == 1){
        b111.style.backgroundColor = 'white'
        b222.style.backgroundColor = 'white'
        b333.style.backgroundColor = 'white'

        totalB++
        resB.innerHTML = totalB

        setTimeout(novoJogo, 1000);
    }
    if(c11 == 1 && c22 == 1 && c33 == 1){
        c111.style.backgroundColor = 'white'
        c222.style.backgroundColor = 'white'
        c333.style.backgroundColor = 'white'

        totalB++
        resB.innerHTML = totalB

        setTimeout(novoJogo, 1000);
    }
    if(a11 == 1 && b11 == 1 && c11 == 1){
        a111.style.backgroundColor = 'white'
        b111.style.backgroundColor = 'white'
        c111.style.backgroundColor = 'white'

        totalB++
        resB.innerHTML = totalB

        setTimeout(novoJogo, 1000);
    }
    if(a22 == 1 && b22 == 1 && c22 == 1){
        a222.style.backgroundColor = 'white'
        b222.style.backgroundColor = 'white'
        c222.style.backgroundColor = 'white'

        totalB++
        resB.innerHTML = totalB

        setTimeout(novoJogo, 1000);
    }
    if(a33 == 1 && b33 == 1 && c33 == 1){
        a333.style.backgroundColor = 'white'
        b333.style.backgroundColor = 'white'
        c333.style.backgroundColor = 'white'

        totalB++
        resB.innerHTML = totalB

        setTimeout(novoJogo, 1000);
    }
    if(a11 == 1 && b22 == 1 && c33 == 1){
        a111.style.backgroundColor = 'white'
        b222.style.backgroundColor = 'white'
        c333.style.backgroundColor = 'white'

        totalB++
        resB.innerHTML = totalB

        setTimeout(novoJogo, 1000);
    }
    if(a33 == 1 && b22 == 1 && c11 == 1){
        a333.style.backgroundColor = 'white'
        b222.style.backgroundColor = 'white'
        c111.style.backgroundColor = 'white'

        totalB++
        resB.innerHTML = totalB

        setTimeout(novoJogo, 1000);
    }

    
    if(a11 == 2 && a22 == 2 && a33 == 2){
        a111.style.backgroundColor = 'white'
        a222.style.backgroundColor = 'white'
        a333.style.backgroundColor = 'white'

        totalX++
        resX.innerHTML = totalX

        setTimeout(novoJogo, 1000);
    }
    if(b11 == 2 && b22 == 2 && b33 == 2){
        b111.style.backgroundColor = 'white'
        b222.style.backgroundColor = 'white'
        b333.style.backgroundColor = 'white'

        totalX++
        resX.innerHTML = totalX

        setTimeout(novoJogo, 1000);
    }
    if(c11 == 2 && c22 == 2 && c33 == 2){
        c111.style.backgroundColor = 'white'
        c222.style.backgroundColor = 'white'
        c333.style.backgroundColor = 'white'

        totalX++
        resX.innerHTML = totalX

        setTimeout(novoJogo, 1000);
    }
    if(a11 == 2 && b11 == 2 && c11 == 2){
        a111.style.backgroundColor = 'white'
        b111.style.backgroundColor = 'white'
        c111.style.backgroundColor = 'white'

        totalX++
        resX.innerHTML = totalX

        setTimeout(novoJogo, 1000);
    }
    if(a22 == 2 && b22 == 2 && c22 == 2){
        a222.style.backgroundColor = 'white'
        b222.style.backgroundColor = 'white'
        c222.style.backgroundColor = 'white'

        totalX++
        resX.innerHTML = totalX

        setTimeout(novoJogo, 1000);
    }
    if(a33 == 2 && b33 == 2 && c33 == 2){
        a333.style.backgroundColor = 'white'
        b333.style.backgroundColor = 'white'
        c333.style.backgroundColor = 'white'

        totalX++
        resX.innerHTML = totalX

        setTimeout(novoJogo, 1000);
    }
    if(a11 == 2 && b22 == 2 && c33 == 2){
        a111.style.backgroundColor = 'white'
        b222.style.backgroundColor = 'white'
        c333.style.backgroundColor = 'white'

        totalX++
        resX.innerHTML = totalX

        setTimeout(novoJogo, 1000);
    }
    if(a33 == 2 && b22 == 2 && c11 == 2){
        a333.style.backgroundColor = 'white'
        b222.style.backgroundColor = 'white'
        c111.style.backgroundColor = 'white'

        totalX++
        resX.innerHTML = totalX

        setTimeout(novoJogo, 1000);
    }


    
}

function a1() {

    if ( a11 == 0){
        if ((cont % 2) == 0){
            a11 = 1
        }
        if ((cont % 2) != 0){
            a11 = 2
        }
        cont ++

    }
    else{
        alert('Já foi Selecionado')
    }

    if (a11 == 1){
        a111.style.backgroundImage = 'url(bolinha.png)'
    }
    if (a11 == 2){
        a111.style.backgroundImage = 'url(xis.png)'
    }

    ganhou()

}

function a2() {

    if ( a22 == 0){
        if ((cont % 2) == 0){
            a22 = 1
        }
        if ((cont % 2) != 0){
            a22 = 2
        }
        cont ++

    }
    else{
        alert('Já foi Selecionado')
    }
    if (a22 == 1){
        a222.style.backgroundImage = 'url(bolinha.png)'
    }
    if (a22 == 2){
        a222.style.backgroundImage = 'url(xis.png)'
    }

    ganhou()
}

function a3() {

    if ( a33 == 0){
        if ((cont % 2) == 0){
            a33 = 1
        }
        if ((cont % 2) != 0){
            a33 = 2
        }
        cont ++

    }
    else{
        alert('Já foi Selecionado')
    }
    if (a33 == 1){
        a333.style.backgroundImage = 'url(bolinha.png)'
    }
    if (a33 == 2){
        a333.style.backgroundImage = 'url(xis.png)'
    }
    ganhou()
}

function b1() {

    if ( b11 == 0){
        if ((cont % 2) == 0){
            b11 = 1
        }
        if ((cont % 2) != 0){
            b11 = 2
        }
        cont ++

    }
    else{
        alert('Já foi Selecionado')
    }
    if (b11 == 1){
        b111.style.backgroundImage = 'url(bolinha.png)'
    }
    if (b11 == 2){
        b111.style.backgroundImage = 'url(xis.png)'
    }
    ganhou()
}

function b2() {

    if ( b22 == 0){
        if ((cont % 2) == 0){
            b22 = 1
        }
        if ((cont % 2) != 0){
            b22 = 2
        }
        cont ++

    }
    else{
        alert('Já foi Selecionado')
    }
    if (b22 == 1){
        b222.style.backgroundImage = 'url(bolinha.png)'
    }
    if (b22 == 2){
        b222.style.backgroundImage = 'url(xis.png)'
    }
    ganhou()
}

function b3() {

    if ( b33 == 0){
        if ((cont % 2) == 0){
            b33 = 1
        }
        if ((cont % 2) != 0){
            b33 = 2
        }
        cont ++

    }
    else{
        alert('Já foi Selecionado')
    }
    if (b33 == 1){
        b333.style.backgroundImage = 'url(bolinha.png)'
    }
    if (b33 == 2){
        b333.style.backgroundImage = 'url(xis.png)'
    }
    ganhou()
}

function c1() {

    if ( c11 == 0){
        if ((cont % 2) == 0){
            c11 = 1
        }
        if ((cont % 2) != 0){
            c11 = 2
        }
        cont ++

    }
    else{
        alert('Já foi Selecionado')
    }
    if (c11 == 1){
        c111.style.backgroundImage = 'url(bolinha.png)'
    }
    if (c11 == 2){
        c111.style.backgroundImage = 'url(xis.png)'
    }
    ganhou()
}

function c2() {

    if ( c22 == 0){
        if ((cont % 2) == 0){
            c22 = 1
        }
        if ((cont % 2) != 0){
            c22 = 2
        }
        cont ++

    }
    else{
        alert('Já foi Selecionado')
    }
    if (c22 == 1){
        c222.style.backgroundImage = 'url(bolinha.png)'
    }
    if (c22 == 2){
        c222.style.backgroundImage = 'url(xis.png)'
    }
    ganhou()
}

function c3() {

    if ( c33 == 0){
        if ((cont % 2) == 0){
            c33 = 1
        }
        if ((cont % 2) != 0){
            c33 = 2
        }
        cont ++

    }
    else{
        alert('Já foi Selecionado')
    }
    if (c33 == 1){
        c333.style.backgroundImage = 'url(bolinha.png)'
    }
    if (c33 == 2){
        c333.style.backgroundImage = 'url(xis.png)'
    }
    ganhou()
}

