
var vi = document.getElementById('visor')

var lista = []

function limpar(){
    vi.value = "" 
    vi.focus()
    lista.length = 0
    
}

function apagar(){
    /* var visor = vi.value
    var visor = visor.substring(0, visor.length -1)
    vi.value = visor */

    vi.value = lista
    
}

function dividir(){
    lista.push( vi.value)

}

function sete(){
    var visor = vi.value
    vi.value = visor + 7
    vi.focus()
}

function oito(){
    var visor = vi.value
    vi.value = visor +  8
    vi.focus()
}

function nove(){
    var visor = vi.value
    vi.value = visor + 9
    vi.focus()
}

function vezes(){

    lista.push(Number(vi.value))
    lista.push('x')

    if (lista.length > 2){
        var total = lista[0] * lista [3]
        vi.value = total
        lista.length = 0
        vi.focus()
    }
    else{
        vi.value = ''
        lista.push(Number(vi.value)) 
        vi.focus()
    }
}

function quatro(){
    var visor = vi.value
    vi.value = visor + 4
    vi.focus()
}

function cinco(){
    var visor = vi.value
    vi.value = visor +  5
    vi.focus()
}

function seis(){
    var visor = vi.value
    vi.value = visor + 6
    vi.focus()
}

function menos(){

    lista.push(Number(vi.value))
    lista.push('-')

    if (lista.length > 2){
        var total = lista[0] - lista [3]
        vi.value = total
        lista.length = 0
        vi.focus()
    }
    else{
        vi.value = ''
        lista.push(Number(vi.value)) 
        vi.focus()
    }
}

function um(){
    var visor = vi.value
    vi.value = visor +  1
    vi.focus()
}

function dois(){
    var visor = vi.value
    vi.value = visor +  2
    vi.focus()
}

function tres(){
    var visor = vi.value
    vi.value = visor +  3
    vi.focus()
}

function mais(){

    lista.push(Number(vi.value))
    lista.push('+')

    if (lista.length > 2){
        var total = lista[0] + lista [3]
        vi.value = total
        lista.length = 0
        vi.focus()
    }
    else{
        vi.value = ''
        lista.push(Number(vi.value)) 
        vi.focus()
    }
}

function zero(){
    var visor = vi.value
    vi.value = visor + 0
    vi.focus()
}

function virgula(){
    var visor = vi.value
    vi.value = visor + '.'
    vi.focus()
}

function igual(){

     if (lista[1] == '/'){
        lista.push(Number(vi.value)) 
        vi.value = lista[0] / lista[3]
        lista.length = 0
        vi.focus()
     }

     if (lista[1] == 'x'){
        lista.push(Number(vi.value)) 
        vi.value = lista[0] * lista[3]
        lista.length = 0
        vi.focus()
     }
     
     if (lista[1] == '-'){
        lista.push(Number(vi.value)) 
        vi.value = lista[0] - lista[3]
        lista.length = 0
        vi.focus()
     }
    
     if (lista[1] == '+'){
        lista.push(Number(vi.value)) 
        vi.value = lista[0] + lista[3]
        lista.length = 0
        vi.focus()
     }
    
}

