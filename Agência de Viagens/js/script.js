addEventListener('load',valores)
addEventListener('click',valores)
function valores(){
    if(document.getElementById('viagem').value == 'sp'){
        viagem = 500
        document.body.style.backgroundImage = 'url(img/santiago.jpg)'
    } else if(document.getElementById('viagem').value == 'ny'){
        viagem = 4000
        document.body.style.backgroundImage = 'url(img/ny-fundo.jpg)'
    } else if(document.getElementById('viagem').value == 'pr'){
        viagem = 6000
        document.body.style.backgroundImage = 'url(img/paris-fundo.jpg)'
    } else if(document.getElementById('viagem').value == 'rio'){
        viagem = 350
        document.body.style.backgroundImage = 'url(img/rio-fundo.jpg)'
    }
    document.getElementById('valor').innerHTML = `${viagem.toLocaleString('pt-br', {style : 'currency', currency: 'BRL'})}`
    if(document.getElementById('carro').checked){
        carro = 300
    } else {
        carro = 0
    }
    if(document.getElementById('guia').checked){
        guia = 400
    } else {
        guia = 0
    }
    if(document.getElementById('hotel').checked){
        hotel = 350
    } else {
        hotel = 0
    }
    if(document.getElementById('resv').checked){
        resv = 150
    } else {
        resv = 0
    }
    if(document.getElementById('carro').checked){
        carro = 200
    } else {
        carro = 0
    }
    if(document.getElementById('brinde').checked){
        brinde = 30
    } else {
        brinde = 0
    }
    document.getElementById('total').value = (viagem + carro + guia + hotel + resv + brinde).toLocaleString('pt-br', {style : 'currency', currency: 'BRL'})
}