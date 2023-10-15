const peso = document.getElementById('weight');
const mandar_datos = document.getElementById('btn_modal_guardar3');
const input_select_w = document.getElementById('input-weight');
const output_select_w = document.getElementById('output-weight');

let result = null

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

export const end_weight = () => {
    let weight = peso.value
    // miligramos
    if (input_select_w.value == 'mg' && output_select_w.value == 'lb') {
        result = weight / 453600
        tiapaola(result, 'lb')
    } else if (input_select_w.value == 'lb' && output_select_w.value == 'mg') {
        result = weight * 453600
        tiapaola(result, 'mg')
    } else if (input_select_w.value == 'mg' && output_select_w.value == 't') {
        result = weight / 1e+9
        tiapaola(result, 't')
    } else if (input_select_w.value == 't' && output_select_w.value == 'mg') {
        result = weight * 1e+9
        tiapaola(result, 'mg')
    }

    // gramos
    else if (input_select_w.value == 'g' && output_select_w.value == 'mg') {
        result = weight * 1000
        tiapaola(result, 'mg')
    } else if (input_select_w.value == 'mg' && output_select_w.value == 'g') {
        result = weight / 1000
        tiapaola(result, 'g')
    } else if (input_select_w.value == 'g' && output_select_w.value == 'kg') {
        result = weight / 1000
        tiapaola(result, 'kg')
    } else if (input_select_w.value == 'kg' && output_select_w.value == 'g') {
        result = weight * 1000
        tiapaola(result, 'g')
    } else if (input_select_w.value == 'g' && output_select_w.value == 'lb') {
        result = weight / 453.6
        tiapaola(result, 'lb')
    } else if (input_select_w.value == 'lb' && output_select_w.value == 'g') {
        result = weight * 453.6
        tiapaola(result, 'g')
    } else if (input_select_w.value == 'g' && output_select_w.value == 't') {
        result = weight / 1e+6
        tiapaola(result, 't')
    } else if (input_select_w.value == 't' && output_select_w.value == 'g') {
        result = weight * 1e+6
        tiapaola(result, 'g')
    }

    // kilogramos
    else if (input_select_w.value == 'kg' && output_select_w.value == 'mg') {
        result = weight * 1e+6
        tiapaola(result, 'mg')
    } else if (input_select_w.value == 'mg' && output_select_w.value == 'kg') {
        result = weight / 1e-6
        tiapaola(result, 'kg')
    } else if (input_select_w.value == 'kg' && output_select_w.value == 'lb') {
        result = weight * 2.205
        tiapaola(result, 'lb')
    } else if (input_select_w.value == 'lb' && output_select_w.value == 'kg') {
        result = weight / 2.205
        tiapaola(result, 'kg')
    } else if (input_select_w.value == 'kg' && output_select_w.value == 't') {
        result = weight / 1000
        tiapaola(result, 't')
    } else if (input_select_w.value == 't' && output_select_w.value == 'kg') {
        result = weight * 1000
        tiapaola(result, 'kg')
    }

    // libra
    else if (input_select_w.value == 'lb' && output_select_w.value == 't') {
        result = weight / 2205
        tiapaola(result, 't')
    } else if (input_select_w.value == 't' && output_select_w.value == 'lb') {
        result = weight * 2205
        tiapaola(result, 'lb')
    } else {
        alert("DATOS INVÁLIDOS")
    }

    // tonelada
};


mandar_datos.addEventListener('click', () => {
    end_weight();
    console.log(input_select_w.value);
    console.log(output_select_w.value);
    console.log(peso.value);
});