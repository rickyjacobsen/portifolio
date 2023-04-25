
var vi = document.getElementById('visor')

var lista = []

function limpar(){
    vi.value = "" 
    lista.length = 0
    
}

function apagar(){
    var visor = vi.value
    var visor = visor.substring(0, visor.length -1)
    vi.value = visor
    
}

function dividir(){
    
    lista.push(Number(vi.value))
    lista.push('/')
    
    if (lista.length > 2){

        var total = lista[0] / lista [3]
        vi.value = total
        lista.length = 0
        
    }
    else{
        vi.value = ''
        lista.push(Number(vi.value)) 
    }

}

function sete(){
    var visor = vi.value
    vi.value = visor + 7
}

function oito(){
    var visor = vi.value
    vi.value = visor +  8
}

function nove(){
    var visor = vi.value
    vi.value = visor + 9
}

function vezes(){

    lista.push(Number(vi.value))
    lista.push('x')

    if (lista.length > 2){
        var total = lista[0] * lista [3]
        vi.value = total
        lista.length = 0
    }
    else{
        vi.value = ''
        lista.push(Number(vi.value)) 
    }
}

function quatro(){
    var visor = vi.value
    vi.value = visor + 4
}

function cinco(){
    var visor = vi.value
    vi.value = visor +  5
}

function seis(){
    var visor = vi.value
    vi.value = visor + 6
}

function menos(){

    lista.push(Number(vi.value))
    lista.push('-')

    if (lista.length > 2){
        var total = lista[0] - lista [3]
        vi.value = total
        lista.length = 0
    }
    else{
        vi.value = ''
        lista.push(Number(vi.value)) 
    }
}

function um(){
    var visor = vi.value
    vi.value = visor +  1
}

function dois(){
    var visor = vi.value
    vi.value = visor +  2
}

function tres(){
    var visor = vi.value
    vi.value = visor +  3
}

function mais(){

    lista.push(Number(vi.value))
    lista.push('+')

    if (lista.length > 2){
        var total = lista[0] + lista [3]
        vi.value = total
        lista.length = 0
    }
    else{
        vi.value = ''
        lista.push(Number(vi.value)) 
    }
}

function zero(){
    var visor = vi.value
    vi.value = visor + 0
}

function virgula(){
    var visor = vi.value
    vi.value = visor + '.'
}

function igual(){

     if (lista[1] == '/'){
        lista.push(Number(vi.value)) 
        vi.value = lista[0] / lista[3]
        lista.length = 0
     }

     if (lista[1] == 'x'){
        lista.push(Number(vi.value)) 
        vi.value = lista[0] * lista[3]
        lista.length = 0
     }
     
     if (lista[1] == '-'){
        lista.push(Number(vi.value)) 
        vi.value = lista[0] - lista[3]
        lista.length = 0
     }
    
     if (lista[1] == '+'){
        lista.push(Number(vi.value)) 
        vi.value = lista[0] + lista[3]
        lista.length = 0
     }
    
}

