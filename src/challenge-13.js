// 13 - Crie uma função de boas vindas ao Bar Botecando!
// Implemente a função `hydrate` que recebe uma string e retorna a sugestão de quantos copos de água você deve beber.

// String recebida:
  '1 cerveja'

// String retornada:
  '1 copo de água'


// String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'

// String retornada:
  '7 copos de água'



// String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'

// String retornada:
  '7 copos de água'


// Para simplificar, considere que a string sempre terá o formato quantidade (em número) + tipo da bebida;

// O número na frente de cada bebida deve estar entre 1 e 9.

// De olho na dica 👀: pesquise por algo similar a get all integers inside a string js.

// O que será testado:

// Retorne a sugestão de quantos copos de água deve-se beber ao receber uma string.

const hydrate = (quantEbebida) => {
  const dadosDeEntrada = quantEbebida.split(/[,\s]+/);
  const quantidade = parseInt(dadosDeEntrada[0]);
  const bebida = dadosDeEntrada[1];

    
if (typeof bebida === 'number') {
    return 'Depois da quantidade você deve especificar o nome da bebida';
  } else if (isNaN(quantidade) || quantidade < 1 || quantidade > 9) {
    console.log(dadosDeEntrada);
    console.log(bebida);
    return 'A quantidade deve ser um número maior que 0 e menor que 9';
  } else {
    return `${quantidade} copos de água`;
  }
};

// console.log(hydrate('7, cervejas'));
// console.log(hydrate('0, cervejas'));
console.log(hydrate('cervejas, 5'));
// console.log(hydrate('7,cervejas'));
// console.log(hydrate('10, cervejas'));