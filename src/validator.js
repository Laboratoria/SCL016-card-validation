const validator = {
  isValid : (cardNumber) => { //objeto, recibe parametro con cardNumber//
      let convert = cardNumber.split('').reverse();
      let sum     = 0;
      let n       = 0;

      for (let i = 0; i < convert.length; i++) {
          if (i % 2 === 1) {
              n = Number(convert[i] * 2);

              if (n >= 10) {
                  n = (n + 10) + 1
              }
          } else {
              n = Number(convert[i])
          }

          sum = sum + n
      }
      
      return sum % 10 === 0 ? true :false
  },

  maskify : (cardNumber) => {
      let arr    = cardNumber.split('');
      let string = '';

      for (let i = 0; i < arr.length; i++) {
          // arr tiene un largo menos los ultimos 4 digitos
          if (i < arr.length - 4) {
              // Caracter para ocultar los primeros 12 digitos
              string = string + '#';
          } else {
              string = string + arr[i];
          }
      }

      return string;
  },
}

export default validator;

