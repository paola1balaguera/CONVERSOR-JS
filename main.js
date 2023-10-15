const backgrounds = ['url(background1.png)', 'url(background2.png)'];
let fondo_actual = 0;
const contenedor = document.querySelector('.container');

function changeBackground() {
    fondo_actual++;
    if (fondo_actual >= backgrounds.length) {
        fondo_actual = 0;
    }

    contenedor.style.backgroundImage = backgrounds[fondo_actual];
}
setInterval(changeBackground, 10000);
changeBackground();


/* LLAMANDO LOS EVENTOS DE LOS BOTONES PRINCIPALES Y DESPUES A LOS MODALES */
const primer_boton = document.getElementById('boton_distancia')
const segundo_boton = document.getElementById('boton_temperatura')
const tercer_boton = document.getElementById('boton_peso')


primer_boton.addEventListener('click', () => {
    let modal_distancia = document.getElementById('modal1');
    let cerrar_modal_distancia = document.getElementById('boton_x_modal1');

    modal_distancia.style.display = "flex";
    cerrar_modal_distancia.addEventListener('click', () => {modal_distancia.style.display = "none"});
});


segundo_boton.addEventListener('click', () => {
    let modal_temperatura = document.getElementById('modal2');
    let cerrar_modal_temperatura = document.getElementById('boton_x_modal2');

    modal_temperatura.style.display = "flex";
    cerrar_modal_temperatura.addEventListener('click', () => {modal_temperatura.style.display = "none"});
});


tercer_boton.addEventListener('click', () => {
    let modal_peso = document.getElementById('modal3');
    let cerrar_modal_peso = document.getElementById('boton_x_modal3');

    modal_peso.style.display = "flex";
    cerrar_modal_peso.addEventListener('click', () => {modal_peso.style.display = "none"});
});



import './distancias.js'
import './temperatura.js'
import './weight.js'