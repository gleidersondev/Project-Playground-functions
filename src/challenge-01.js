// Implemente a função  utilizando somente o operador &&

// A função compareTrue ao receber dois parâmetros booleanos deve:

// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros forem falsos.
// Exemplo:

const girafa = true;
const elefante = true;
const macaco = false;

// Se a função for chamada com os valores girafa e elefante como parâmetro, retorna true, mas caso seja chamada com os parâmetro macaco e elefante retorna false.

const compareTrue = (paran1, paran2) => paran1 && paran2;

console.log(compareTrue(girafa, elefante));

console.log(compareTrue(macaco, elefante));