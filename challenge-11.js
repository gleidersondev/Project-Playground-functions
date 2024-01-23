// 11 - Crie uma função de número de telefone
// Implemente a função generatePhoneNumber que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

// Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], a função generatePhoneNumber deverá retornar (12) 34567-8901.

// Retorne a frase  se a função receber um array com tamanho diferente de 11;

// Retorne a string 'não é possível gerar um número de telefone com esses valores' caso algum dos números do array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais.

// O que será testado:

// Retorne a string 'Array com tamanho incorreto.' caso o array tenha o tamanho diferente de 11;

// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0;

// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9;

// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais;

// Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações.

const fone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
const fone2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9];
const fone3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 6];
const fone4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 22];
const fone5 = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

const generatePhoneNumber = (array) => {

  const incorrectSize = 'Array com tamanho incorreto.'
  const incorrectValues = 'Não é possível gerar um número de telefone com esses valores.'
  let repeatedNumbers = 0;

  // verifica se o array contem 11 numeros, caso contrário "incorrectSize"
  if (array.length !== 11) {
    return incorrectSize;
  };

  // Retorne "incorrectValues" caso algum dos números do array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais.
  for (let i = 0; i < array.length; i +=1) {
    repeatedNumbers = 0;

    for (let c = 0; c < array.length; c +=1) {
      if (array[i] === array[c]) {
        repeatedNumbers += 1;
      };

      if (repeatedNumbers === 3 || array[c] < 0 || array[c] > 9) {
        return incorrectValues;
      };
    };
  };

    let part1 = array.slice(0,2).join('');
    let part2 = array.slice(2,7).join('');
    let part3 = array.slice(7).join('');

    return `(${part1}) ${part2}-${part3}`;
};

// console.log(generatePhoneNumber(fone));
// console.log(generatePhoneNumber(fone2));
console.log(generatePhoneNumber(fone3));
// console.log(generatePhoneNumber(fone4));
// console.log(generatePhoneNumber(fone5));

// Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], a função generatePhoneNumber deverá retornar (12) 34567-8901.