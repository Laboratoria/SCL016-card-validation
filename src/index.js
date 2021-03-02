import validator from './validator.js';

//
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
const mostrarFrente = () => { // funcion para mostrar el frente de la tarjeta es igual a una funcion tipo flecha
    if(tarjeta.classList.contains('active')){ //condicional para comprobar si la tarjeta contiene la clase active
        tarjeta.classList.remove('active'); // si contiene la clase active, con remove la eliminamos 
    }
}
// Al momento de dar click a la tarjeta esta rota
tarjeta.addEventListener('click', () => {
    // accede a la tarjeta, accede a su lista de class  toggle es mostrar u ocultar
    tarjeta.classList.toggle('active');
});

// Al momento de clickear el boton, este rota simulando abrir
btnAbrirFormulario.addEventListener('click',() => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// Rellenar los select del mes 
//Ciclo de tipo for
for(let i = 1; i <= 12; i++){ // Creo una variable de tipo i y le digo que empiece en 1, le pido que el ciclo se repita mientras i es menor  o igual a 12
    let opcion = document.createElement('option'); // en cada ejecucion del ciclo hagas una variable que se llamara opcion , creando un elemento de etiqueta option
    opcion.value = i; // accedo a opcion y el valor va a ser igual a la variable i en cada ciclo por 12 veces
    opcion.innerText = i; // accedo a opcion y le pido accediendo a innertext  que sea igual a la variable i (trabaja directamente con el texto de los meses dentro de la opcion)
    formulario.selectMes.appendChild(opcion); // accedo a form y accedo a selectmes , con el appendchild ponemos dentro de la opcion mes el ciclo
}

// Rellenar los select del año 
const yearActual = new Date().getFullYear(); // Agrego una variable del año actual y con el new date consigo el año actual desde el pc con el metodo get tengo el año completo 
for(let i = yearActual; i <= yearActual + 8; i++){ // Creamos el ciclo for nuevamente agregamos la variable i , le digo que i sea igual al año actual para comenzar el ciclo  y que se repita el ciclo mientras que i sea menos o igual al año actual sumandole 8 años 
    let opcion = document.createElement('option'); // en cada ejecucion del ciclo hagas una variable que se llamara opcion , creando un elemento de etiqueta option
    opcion.value = i; // accedo a opcion y el valor va a ser igual a la variable i en cada ciclo por 8 veces
    opcion.innerText = i; // accedo a opcion y le pido accediendo a innertext  que sea igual a la variable i (trabaja directamente con el texto de los años dentro de la opcion)
    formulario.selectYear.appendChild(opcion); // accedo a form y accedo a selectyear , con el appendchild ponemos dentro de la opcion año el ciclo
} 

//Numero de tarjeta
formulario.cardNumber.addEventListener('keyup', (e) => { // accedo a form y a la id de cardnumber agrego un evento para detectar una tecla y se ejecute el evento (e) es para recibir el evento con un evento tipo flecha
    let valorInput = e.target.value; // agrego una variable que se llama valor input que sea igual a (e.target.value) esto accede al valor del input (e) mediante este evento
    formulario.cardNumber.value = valorInput // accedo al form, luego cardnumber y que sea igual a valor input
    .replace(/\s/g,'') // expresion regular que Elimina los espacios en blanco
    .replace(/\D/g,'') //  expresion regular que Elimina las letras
    .replace(/([0-9]{4})/g, '$1 ') //  expresion regular que pone espacio
    .trim(); // Expresion regular que elimina el ultimo espaciado

    numeroTarjeta.textContent = valorInput; // Trasladar animaciona  la tarjeta se ejecuta cada vez que se realiza el keyup

    if(valorInput == ''){ // Condicional se ejecuta cada vez que se realiza keyup ( reset al original) // si el valor de input es ugual a un valor vacio
        numeroTarjeta.textContent = '#### #### #### ####'; // que se ejecute este codigo al momento que el valor sea vacio

        logoMarca.innerHTML = ''; // sea igual a un campo vacio para que al momento de borrar el logo desaparezca
    }
    if(valorInput[0] == 4){ // condicional que comprueba si el caracter inicial es igual a 4 este ejecuta la imagen de visa
        logoMarca.innerHTML = ''; //solo aparece un logo y cambia a otro si se pone otro numero
        const imagen = document.createElement('img') // con const creo una variable que se llama imagen y creamos un elemento con etiqueta img
        imagen.src = 'image/visa.png'; // tiene un atributo src para saber la ruta donde encontrar la imagen png 
        logoMarca.appendChild(imagen) // accedo al id logo marca y le realizo un elemento hijo de la imagen
    } else if(valorInput[0] == 5){ // condicional que comprueba si el caracter inicial es igual a 5 este ejecuta la imagen de mastercard
        logoMarca.innerHTML = '';  //solo aparece un logo y cambia a otro si se pone otro numero
        const imagen = document.createElement('img') // con const creo una variable que se llama imagen y creamos un elemento con etiqueta img
        imagen.src = 'image/mastercard.png';// tiene un atributo src para saber la ruta donde encontrar la imagen png 
        logoMarca.appendChild(imagen); // accedo al id logo marca y le realizo un elemento hijo de la imagen
    }

    //funcion para Rotar tarjeta y que el cliente la vea
    mostrarFrente();
});

// Nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => { // accede al form y le pongo un evento de keyup , quiero que ejecute una funcion de tipo flecha , la cual recibe el parametro de (e) el cual me permite acceder al valor del input
    let valorInput = e.target.value; 

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, ''); // elimina los numeros en el input (que busque una coincidencia entre los numeros 0-9 en el caso de encontrarlo que lo remplace por un valor vacio)
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput; // que el valor firma sea igual a lo que esta escrito en valor input

    if(valorInput == ''){ // condicional sobre si el valorinput es igual a un valor vacio, el contenido dentro del input sea igual a  'Jhon Doe'
        nombreTarjeta.textContent = 'Jhon Doe'; 
    }
    mostrarFrente();
});
// Seleccion de mes
formulario.selectMes.addEventListener('change', (e) => { // accedo a form luego a selectmes , le pongo un evento de  tipo change , osea que se ejecuta cada vez que hay un cambio en el select con una funcionde tipo flecha
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();

});
// Seleccion de año
formulario.selectYear.addEventListener('change', (e) => { // accedo a form luego a select
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
// Comienza el validador 
let cardNumber='';
let btnValidar = document.getElementById("btnValidar");


btnValidar.addEventListener('click',()=>{
    cardNumber=document.getElementById('cardNumber').value;
    let validation = validator.isValid(cardNumber);
    console.log(validation)
    let maskify = validator.maskify(cardNumber);
    console.log(maskify)
    let twoCardNumber = Number(cardNumber);
    let arraySum =0;

    for (let i=0; i< twoCardNumber.length; i++){
        arraySum += twoCardNumber [i];
    };

    if (cardNumber.length < 16){
        alert('EL número de tarjeta es invalido, ingrese nuevamente.');
    }
    else if (cardNumber === 0){
        alert('EL número de tarjeta es invalido, ingrese nuevamente.')
    }
    else if(validation === true){
        alert( 'tarjeta ' + maskify + ' valida');
    }
    else{
        alert( 'tarjeta ' + maskify + ' invalida')
    };


});