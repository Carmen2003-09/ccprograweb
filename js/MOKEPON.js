function iniciarJuego() {

    let botonMascotaJugador = document.getElementById("boton-mascota");
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMascotajugador = document.getElementById('mascota-jugador')
    if (inputHipodoge.checked) {
        spanMascotajugador.innerHTML = 'Hipodoge'
    }else if (inputCapipepo.checked) {
        spanMascotajugador.innerHTML = 'Capipepo'
    }else if (inputRatigueya.checked) {
        spanMascotajugador.innerHTML = 'Ratigueya'
    } else {
        alert ('Selecciona a una mascota')
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
function aleatorio(min,max){
    return Math.floor(Math.random()* (max-min + 1) + min)
}

window.addEventListener('load',iniciarJuego)