// 6 - Crie uma função que calcula o número de repetições do maior número
// Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números.

// A função deve retornar a quantidade de vezes que o maior número se repete dentro do array.

// Por exemplo:

// Caso o parâmetro seja um array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.
// O que será testado:

// Retorne 2 quando o parâmetro passado na função highestCount seja

const numbers = [9, 1, 2, 3, 9, 5, 7];

// Retorne 1 quando o parâmetro passado na função highestCount seja [0, 4, 4, 4, 9, 2, 1];

const numbers2 = [0, 4, 4, 4, 9, 2, 1];

// Retorne 3 quando o parâmetro passado na função highestCount seja [0, 0, 0].

const numbers3 = [0, 0, 0];

const highestCount = (array) => {
  let higherNumber = array[0];
  let repetitions = 0;

  for (let index = 0; index < array.length; index +=1) {
    if(array[index] > higherNumber) {
      higherNumber = array[index];
      repetitions = 0;
    }
    
    if (array[index] === higherNumber) {
      repetitions +=1;
    }
  };

  return repetitions;
}

console.log(highestCount(numbers));

console.log(highestCount(numbers2));

console.log(highestCount(numbers3));