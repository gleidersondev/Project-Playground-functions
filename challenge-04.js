// 4 - Crie uma função que use concatenação de strings
// Implemente a função concatName que recebe um array de strings e retorna o último item na primeira posição

// A função `concatName` recebe um array de strings e deve retornar uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho do array.
// Exemplo:

// Caso o parâmetro passado para a função concatName seja o array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.

const nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

const frase = ['foguete', 'não', 'tem', 'ré'];

const capitao = ['captain', 'my', 'captain'];

// O que será testado:

// Retorne 'Paolillo, Lucas' quando o parâmetro passado na funcão concatName seja ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

// Retorne 'ré, foguete' quando o parâmetro passado na funcão concatName seja ['foguete', 'não', 'tem', 'ré'];

// Retorne 'captain, captain' quando o parâmetro passado na funcão concatName seja ['captain', 'my', 'captain'].

const concatName = (array) => {
  const result = [array[array.length -1], array[0]];
  return result;
};

console.log(concatName(nomes));

console.log(concatName(frase));

console.log(concatName(capitao));

