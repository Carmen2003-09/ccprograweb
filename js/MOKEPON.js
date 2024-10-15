// alert ("¡Hola!")
// Seleccionarmascota.addEventListener('click')
// let Seleccionarmascota = document.getElementById('boton-mascota')
// Función que se ejecuta cuando la ventana se carga completamente
// Función que se ejecuta cuando la ventana se carga completamente
function iniciarJuego() {
    // Seleccionar el botón de seleccionar mascota
    let botonMascotaJugador = document.getElementById('boton-mascota');
    
    // evento de clic
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

// Función de cuando se selecciona la mascota
function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    if (inputHipodoge.checked) {
        alert('Seleccionaste a hipodoge')
    }else if (inputCapipepo.checked) {
        alert ('Seleccionaste a capipepo')
    }else if (inputRatigueya.checked) {
        alert ('Seleccionaste a Ratigueya')
    } else {
        alert ('Selecciona a una mascota')
    }
}

// carga de la ventana y ejecutar la función iniciarJuego
window.addEventListener('load', iniciarJuego);