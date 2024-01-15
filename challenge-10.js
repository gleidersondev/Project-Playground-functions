// 10 - Crie uma função de Lista de Tecnologias
// Implemente a função techList que recebe um array e uma string e retorna um array de objetos.

// A função techList recebe dois parâmetros:

// Um array com nomes de tecnologias ;
// Um nome referente ao nome de uma pessoa.
// A função deverá retornar:

// 'Vazio!' se não receber parâmetro algum ;
// Um objeto para cada tecnologia do array, com a seguinte estrutura:
// {
//   tech: 'NomeTech',
//   name: 'nome da pessoa'
// }
// Por exemplo, se a função recebe os parâmetros ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'] e 'Lucas', o retorno deve ser:

// [
//   {
//     tech: "CSS",
//     name: "Lucas"
//   },
//   {
//     tech: "HTML",
//     name: "Lucas"
//   },
//   {
//     tech: "JavaScript",
//     name: "Lucas"
//   },
//   {
//     tech: "Jest",
//     name: "Lucas"
//   },
//   {
//     tech: "React",
//     name: "Lucas"
//   }
// ]
// O que será testado:

// Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias;

// Retorne a mensagem de erro 'Vazio!' quando a lista não tiver tecnologias.