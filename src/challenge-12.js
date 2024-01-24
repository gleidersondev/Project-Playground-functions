// 12 - Crie uma função que teste a condição de existência de um triângulo
// Implemente a função triangleCheck que verifica se é possível formar um triângulo analisando o comprimento de três linhas

// A função triangleCheck deverá receber os parâmetros  com o valor do comprimento de três linhas distintas.

// Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados atenda às seguintes condições:
// seja menor que a soma das medidas dos outros dois lados;
// E

// seja maior que o valor absoluto (módulo) da diferença entre os outros dois lados.
// De olho na dica :eyes: Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.

// O retorno da sua função deverá ser um booleano.
// Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.

// O que será testado:

// Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois lados;

// Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença das medidas dos outros dois lados;

// Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois lados e maior que o valor absoluto da diferença entre os outros dois lados.

const triangleCheck = (lineA, lineB, lineC) => {

  let caseA = lineA < Math.abs(lineB - lineC);
  let caseB = lineB < Math.abs(lineA - lineC);
  let caseC = lineC < Math.abs(lineA - lineB); 

  let caseD = lineA > (lineB + lineC);
  let caseE = lineB > (lineA + lineC);
  let caseF = lineC > (lineA + lineB);
  let result = true;

  if (lineA <= 0 || lineB <= 0 || lineC <= 0) {
    return 'Não é permitido números menores ou iguais a 0 (zero)'
  } else if (caseA || caseB || caseC) {
    result = false;
  } else if (caseD || caseE || caseF) {
    result = false;
  } else if (!caseD && !caseA || !caseE && !caseB || !caseF && !lineC) {
    result = true;
  }
  return result;
}

console.log(triangleCheck(10,14,8));
console.log(triangleCheck(10,14,-10));
console.log(triangleCheck(5,14,8));
console.log(triangleCheck(10,2,7));
console.log(triangleCheck(10,14,1));
console.log(triangleCheck(2,8,8));
console.log(triangleCheck(10,4,8));