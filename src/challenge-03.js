// 3 - Crie uma função que divida uma frase
// Implemente a função splitSentence que divide uma frase de acordo com a quantidade de palavras

// A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula.
// Exemplo: se a função receber a string 'Vamos Flamengo', o retorno deverá ser ['Vamos', 'Flamengo'].

// O que será testado:

// Retorne o valor ['Vamos', 'Flamengo'] se a função receber a string 'Vamos Flamengo';

// Retorne o valor ['vamo', 'que', 'vamo'] se a função receber a string 'vamo que vamo';

// Retorne o valor ['foguete'] se a função receber a string 'foguete'.

const flamengo = 'Vamos Flamengo';

const vamo = 'vamo que vamo';

const praCima = 'foguete';

const splitSentence = (string) => string.split(' ');

console.log(splitSentence(flamengo));

console.log(splitSentence(vamo));

console.log(splitSentence(praCima));