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
  inputDias: false
};

inputIngresos.addEventListener('change', (e) => {
  const inputDatosIngresos = e.target.value;
  console.log(inputDatosIngresos);
  if( inputDatosIngresos < 500 ) {
    cartelWarning.classList.remove('d-none');
    cartelWarning.textContent = 'Tu inversion debe superar los $500(dólares)'
  } else if( inputDatosIngresos > 10000 ) {
    cartelWarning.classList.remove('d-none');
    cartelWarning.textContent = 'Tu inversion debe no debe superar los $10.000(dólares)'
  } else {
    cartelWarning.classList.add('d-none');
    capital.textContent = 'Capital: $' + inputDatosIngresos;
  }
})


inputDias.addEventListener('change', (e) => {
  const inputDatosDias = e.target.value;
  console.log(inputDatosDias);
  if( inputDatosDias < 30 ) {
    cartelWarning.classList.remove('d-none');
    cartelWarning.textContent = 'La cantidad de días mínima debe ser de 30 días'
  } else if( inputDatosDias > 365 ) {
    cartelWarning.classList.remove('d-none');
    cartelWarning.textContent = 'La cantidad de días máxima debe ser de 365 días'
  } else {
    cartelWarning.classList.add('d-none');
    plazoDias.textContent = 'Plazo: ' + inputDatosDias + ' días.';
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  tablaResultado.classList.remove('d-none');
})

btnBorrar.addEventListener('click', () => {
  form.reset();
  cartelWarning.classList.add('d-none');
  tablaResultado.classList.add('d-none');
})




