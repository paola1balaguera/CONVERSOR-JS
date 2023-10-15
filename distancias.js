const distance = document.getElementById('distance');
const mandar_datos = document.getElementById('btn_modal_guardar1');
const input_select = document.getElementById('input-dates-select');
const output_select = document.getElementById('output-dates-select');


function tiapaola(result, tipo) {
    let bom = document.getElementById('resultado')
    bom.style.display = 'flex'

    let rpt = document.getElementById('respuesta_final')
    rpt.innerHTML = `El resultado es ${result} ${tipo}`


    let boton_cerrado = document.getElementById('cerrar_resultado')
    boton_cerrado.addEventListener('click', () => {
        bom.style.display = 'none'
    })
}

export const end_distance = () => {
    let result = 0;

    if (input_select.value === 'km' && output_select.value === 'm') {
        result = distance.value * 1000;
        tiapaola(result, 'm');
    } else if (input_select.value === 'm' && output_select.value === 'km') {
        result = distance.value / 1000;
        tiapaola(result, 'km');
    } else if (input_select.value == 'km' && output_select.value == 'mi' || input_select.value == 'mi' && output_select.value == 'km') {
        result = distance * 0.621371;
        tiapaola(result, 'mi');
    } else if (input_select.value == 'km' && output_select.value == 'ft' || input_select.value == 'ft' && output_select.value == 'km') {
        result = distance * 3280.84;
        tiapaola(result, 'ft');
    } else if (input_select.value == 'km' && output_select.value == 'cm' || input_select.value == 'cm' && output_select.value == 'km') {
        result = distance * 100000;
        tiapaola(result, 'cm');
    } else if (input_select.value == 'm' && output_select.value == 'cm' || input_select.value == 'cm' && output_select.value == 'm') {
        result = distance * 100;
        tiapaola(result, 'cm');
    } else if (input_select.value == 'm' && output_select.value == 'mi' || input_select.value == 'mi' && output_select.value == 'm') {
        result = distance * 0.000621371;
        tiapaola(result, 'mi');
    } else if (input_select.value == 'm' && output_select.value == 'ft' || input_select.value == 'ft' && output_select.value == 'm') {
        result = distance * 3.28084;
        tiapaola(result, 'ft');
    } else if (input_select.value == 'mi' && output_select.value == 'cm' || input_select.value == 'cm' && output_select.value == 'mi') {
        result = distance * 160934;
        tiapaola(result, 'cm');
    } else if (input_select.value == 'mi' && output_select.value == 'ft' || input_select.value == 'ft' && output_select.value == 'mi') {
        result = distance * 5280;
        tiapaola(result, 'ft');
    } else if (input_select.value == 'cm' && output_select.value == 'ft' || input_select.value == 'ft' && output_select.value == 'cm') {
        result = distance * 0.0328084;
        tiapaola(result, 'ft');
    } else {
        alert("DATOS INVALIDOS");
    }
}


mandar_datos.addEventListener('click', () => {
    end_distance();
    console.log(input_select.value);
    console.log(output_select.value);
    console.log(distance.value);
});