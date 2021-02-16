const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta'),
      numeroTarjeta = document.querySelector('#tarjeta .numero'),
      nombreTarjeta = document.querySelector('#tarjeta .nombre'),
      logoMarca = document.querySelector('#logo-marca'),
      firma = document.querySelector('#tarjeta .firma p'),
      mesExpiracion = document.querySelector('#tarjeta .mes'),
      yearExpiracion = document.querySelector('#tarjeta .year'),
      CCV = document.querySelector('#tarjeta .ccv');


//volteamos la tarjeta
const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
    }
}
// Al momento de dar click a la tarjeta esta rota
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// Al momento de clickear el boton, este rota simulando abrir
btnAbrirFormulario.addEventListener('click',() => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// Rellenar los select del mes 
//el ciclo se ejecuta 12 veces para hacerlo dinamico
for(let i = 1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

// Rellenar los select del año 
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

//Numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    // expresion regular que Elimina los espacios en blanco
    .replace(/\s/g,'')
    //  expresion regular que Elimina las letras
    .replace(/\D/g,'')
    //  expresion regular que pone espacio
    .replace(/([0-9]{4})/g, '$1 ')
    // Expresion regular que elimina el ultimo espaciado
    .trim();
// Trasladar animaciona  la tarjeta
    numeroTarjeta.textContent = valorInput;
// Condicional de reset al original 
    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
    }
    if(valorInput[0] == 4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img')
        imagen.src = 'image/visa.png';
        logoMarca.appendChild(imagen)
    } else if(valorInput[0] == 5){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img')
        imagen.src = 'image/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    //Rotar tarjeta para que el cliente la vea
    mostrarFrente();
});

// Nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'Jhon Doe';
    }
    mostrarFrente();
});
// Seleccion de mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();

});
// Seleccion de año
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();

});
// Codigo de seguridad
formulario.inputCCV.addEventListener('keyup', () => {
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');

    }

    formulario.inputCCV.value = formulario.inputCCV.value
    .replace(/\s/g, '')
    .replace(/\D/g, '')

    CCV.textContent = formulario.inputCCV.value;

});