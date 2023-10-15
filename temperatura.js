const grades = document.getElementById('grades');
const mandar_datos = document.getElementById('btn_modal_guardar2');
const input_select_t = document.getElementById('input-temperature');
const output_select_t = document.getElementById('outpot-temperature');


function tiapaola(result, tipo) {
    
    let bom = document.getElementById('resultado');
    bom.style.display = 'flex';

    let rpt = document.getElementById('respuesta_final');
    rpt.innerHTML = `El resultado es ${result} ${tipo}`;

    let boton_cerrado = document.getElementById('cerrar_resultado');
    boton_cerrado.addEventListener('click', () => {
        bom.style.display = 'none';
    });
}

export const end_temperature = () => {
    let result = 0;
    let temperature = parseFloat(grades.value);

    // inicio de pasar de C a F y viceversa
    if (input_select_t.value === 'ºC' && output_select_t.value === 'ºF') {
        result = temperature * 1.8 + 32;
        tiapaola(result, 'ºF');
    } else if (input_select_t.value === 'ºF' && output_select_t.value === 'ºC') {
        result = (temperature - 32) / 1.8;
        tiapaola(result, 'ºF');
    }

    // inicio de pasar de Kelvin a Celsius y viceversa
    else if (input_select_t.value === 'K' && output_select_t.value === 'ºC') {
        result = temperature - 273.15;
        tiapaola(result, 'ºC');
    } else if (input_select_t.value === 'ºC' && output_select_t.value === 'K') {
        result = temperature + 273.15;
        tiapaola(result, 'K');
    } else if (input_select_t.value === 'ºF' && output_select_t.value === 'K') {
        result = (5 / 9) * (temperature - 32) + 273.15;
        tiapaola(result, 'K');
    } else if (input_select_t.value === 'K' && output_select_t.value === 'ºF') {
        result = 1.8 * (temperature - 273.15) + 32;
        tiapaola(result, 'ºF');
    }
};



mandar_datos.addEventListener('click', () => {
    end_temperature();
    console.log(input_select_t.value);
    console.log(output_select_t.value);
    console.log(grades.value);
});