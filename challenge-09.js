// 9 - Crie uma função que Codifique e Decodifique
// Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais.

// Para codificar a frase utilize a função encode que recebe uma string como parâmetro e deverá trocar todas as vogais minúsculas por números, de acordo com o formato:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// Ou seja, caso o parâmetro de encode seja 'hi there!', o retorno deverá ser 'h3 th2r2!'.

// Para decodificar a frase utilize a função decode que recebe uma string contendo letras e números como parâmetro e deverá trocar todos os números por vogais minúsculas, de acordo com o formato:

// 1 -> a
// 2 -> e
// 3 -> i
// 4 -> o
// 5 -> u

// Por exemplo, caso o parâmetro de decode seja 'h3 th2r2!', o retorno deverá ser 'hi there!'.

// O que será testado:

// Ao utilizar o parâmetro hello, deverá trazer como retorno h2ll4;
// Ao utilizar o parâmetro How are you today? deverá trazer como retorno H4w 1r2 y45 t4d1y?;
// Ao utilizar o parâmetro This is an encoding test. deverá trazer como retorno Th3s 3s 1n 2nc4d3ng t2st.;

let param1 = 'hello';
let param2 = 'How are you today?';
let param3 = 'This is an encoding test.';

const encode = (addString) => {

  let result = addString.split('');

  const letters = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  
  for (let index = 0; index < result.length; index +=1) {
    if (result[index] === 'a') {
      result[index] = letters.a;
    } else if (result[index] === 'e') {
      result[index] = letters.e;
    } else if (result[index] === 'i') {
      result[index] = letters.i;
    } else if (result[index] === 'o') {
      result[index] = letters.o;
    } else if (result[index] === 'u') {
      result[index] = letters.u;
    }
  }
  return result.join('');
};

param1 = encode(param1);
console.log(encode(param1));

param2 = encode(param2);
console.log(encode(param2));

param3 = encode(param3);
console.log(encode(param3));

const decode = (addString) => {

  let result = addString.split('');

  let numbers = { number1: 'a', number2: 'e', number3: 'i', number4: 'o', number5: 'u' };
  
  for (let index = 0; index < result.length; index +=1) {
    if (result[index] === '1') {
      result[index] = numbers.number1;
    } else if (result[index] === '2') {
      result[index] = numbers.number2;
    } else if (result[index] === '3') {
      result[index] = numbers.number3;
    } else if (result[index] === '4') {
      result[index] = numbers.number4;
    } else if (result[index] === '5') {
      result[index] = numbers.number5;
    }
  }
  return result.join('');
};

param1 = decode(param1);
console.log(decode(param1));

param2 = decode(param2);
console.log(decode(param2));

param3 = decode(param3);
console.log(decode(param3));

