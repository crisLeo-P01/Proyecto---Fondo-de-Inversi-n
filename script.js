const form = document.querySelector('#form');
const cartelWarning = document.querySelector('#cartelWarning')
const inputIngresos = document.querySelector('#ingresos');
const inputDias = document.querySelector('#diasInversion');
const btnEnviar = document.querySelector('#btnEnviar');
const btnBorrar = document.querySelector('#btnBorrar');

// TABLA DE RESULTADOS
const plazoDias = document.querySelector('#plazo-dias');
const capital = document.querySelector('#capital');
const interesesGanados = document.querySelector('#intereses-ganados');
const montoTotal = document.querySelector('#monto-total');
const tablaResultado = document.querySelector('#contain-datos-inversion');

const formInValid = {
  inputIngresos: false,
  inputDias: false,
};

let inputDatosIngresos; // variable de forma global
// INPUT INGRESOS
inputIngresos.addEventListener('change', (e) => {
  inputDatosIngresos = e.target.value;

  if( inputDatosIngresos < 500 || inputDatosIngresos > 10000) {
    formInValid.inputIngresos = false;
    cartelWarning.classList.remove('d-none');
    cartelWarning.textContent = 'Tu inversion debe superar los $500 y un máximo de $10.000';
  } else {
    cartelWarning.classList.add('d-none');
    capital.textContent = 'Capital: $' + inputDatosIngresos;
    formInValid.inputIngresos = true;
  }
})

let inputDatosDias; // variable de forma global
// INPUT DIAS
inputDias.addEventListener('change', (e) => {
  inputDatosDias = e.target.value;

  if( inputDatosDias < 30 || inputDatosDias > 365) {
    cartelWarning.classList.remove('d-none');
    cartelWarning.textContent = 'La cantidad de días mínima debe ser de 30 días y un máximo de 365 días'
    formInValid.inputDias = false;
  } else {
    cartelWarning.classList.add('d-none');
    plazoDias.textContent = 'Plazo: ' + inputDatosDias + ' días.';
    formInValid.inputDias = true;

    if(formInValid.inputIngresos && formInValid.inputDias) {
      btnEnviar.removeAttribute('disabled')
    } else {
      btnEnviar.setAttribute('disabled', true);
    } 
  }

  // LOGICA DE RESULTADO
  const interesDiario = 0.2083;
  let datoDiasInteres = inputDatosDias * interesDiario;
  let resultadoInteres = (inputDatosIngresos * datoDiasInteres) / 100;
  interesesGanados.textContent = 'Intereses ganados: $' + resultadoInteres.toFixed(2);
  let capitalMasInteres = parseFloat(inputDatosIngresos) + parseFloat(resultadoInteres);
  montoTotal.textContent =  'Monto Total: $' + capitalMasInteres.toFixed(2);
})

// FORMULARIO BUTTON ENVIAR
form.addEventListener('submit', (e) => {
  e.preventDefault();
  tablaResultado.classList.remove('d-none');
})

// BUTTON BORRAR 
btnBorrar.addEventListener('click', () => {
  form.reset();
  cartelWarning.classList.add('d-none');
  tablaResultado.classList.add('d-none');
  btnEnviar.setAttribute('disabled', true);
})
