const validator = {
  isValid : (cardNumber) => { //objeto, recibe parametro con cardNumber//
      let convert = cardNumber.split('').reverse(); //se define un array, se toma el numero de la tarjeta , se divide y se da vuelta 
      let sum     = 0;
      let n       = 0;

      for (let i = 0; i < convert.length; i++) { // Ciclo for declaro una variable i (indice) ue se inicia en el valor 0 (primer numero)  (recorre algo) cuando sea menor a la extension se va a detener y se incrementa en 1 en cada ciclo 16 veces
          if (i % 2 === 1) { // si i dividido en 2 , (el restante) es igual a 1 (=== : estrictamente igual) se ejecuta 
              n = Number(convert[i] * 2); // n es igual al numero en la posicion dada , toma a convert (numero dado vuelta) y seleccione el numero de la posicion i , y ese numero en la variable i se multiplique por dos

              if (n >= 10) { // si n es mayor o igual a 10 
                  n = (n + 10) + 1 // n es igual a n mas 10 mas 1
              }
          } else { // si no se cumple el if pasa a esta formula (que n se deje como esta)
              n = Number(convert[i])
          }

          sum = sum + n // sum es igual a 0 y se suma al n (dentro del ciclo por cada ciclo) (en cada vuelta el sum cambia )
      }
      
      return sum % 10 === 0 ? true :false // retorna si la suma divido en 10 es igual a 0  (?) entonces es true , (:) si no se cumple es falso
  },

  maskify : (cardNumber) => { 
      let arr    = cardNumber.split(''); // defino el arr , y el split lo transforma en un array
      let string = ''; // defino el string pero sin valor porque aun es inexistente

      for (let i = 0; i < arr.length; i++) { // ciclo for que la variable i es igual a 0 , si i es menor que el largo de definido en la arr se incrementa 1
          // arr tiene un largo menos los ultimos 4 digitos
          if (i < arr.length - 4) { // se borran los ultimos 4 para usar el maskify y ocultarlos
              // Caracter para ocultar los primeros 12 digitos
              string = string + '#'; 
          } else {
              string = string + arr[i]; // si no se cumple el numero completo se oculta y aparece la alerta 
          }
      }

      return string;
  },
}

export default validator;

