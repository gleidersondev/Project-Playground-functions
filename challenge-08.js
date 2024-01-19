// 8 - Crie uma função 
// Implemente a função fizzBuzz que recebe um array de números e retorna um array de string de acordo com o resultado

// A função fizzBuzz recebe um array de números e para cada número do array é realizada a divisão por 3 e por 5 e de acordo com o resultado, a função deve retornar uma string:

// Retorne a string 'fizz' para cada número do array que seja divisível apenas por 3;
// Retorne a string 'buzz' para cada número do array que seja divisível apenas por 5;
// Retorne a string 'fizzBuzz' para cada número do array que seja divisível por 3 e 5;
// Retorne a string 'bug!' para cada número do array que não seja dividido por 3 nem por 5.
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'].

// O que será testado:

// Retorne as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando é passado os parâmetros [2, 15, 7, 9, 45] para a função fizzBuzz;

// Retorne as strings ['bug!', 'fizz'] quando é passado os parâmetros [7, 9] para a função fizzBuzz;

// Retorne as strings ['fizz', 'buzz'] quando é passado os parâmetros [9, 25] para a função fizzBuzz.

const dados = [2, 15, 7, 9, 45];

const dados2 = [7, 9];

const dados3 = [9, 25];


const fizzBuzz = (numeros) => {
  let resultado = [];

  for (let index = 0; index < numeros.length; index +=1) {
    if ((numeros[index] % 3 === 0) && (numeros[index] % 5 === 0)) {
      resultado.push('fizzBuzz');

    } else if (numeros[index] % 3 === 0) {
      resultado.push('fizz');
      
    } else if (numeros[index] % 5 === 0) {
      resultado.push('buzz');

    } else {
      resultado.push('bug');
    }
  }
  return resultado;
}

console.log(fizzBuzz(dados));

console.log(fizzBuzz(dados2));

console.log(fizzBuzz(dados3));


