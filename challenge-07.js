// 7 - Crie uma função de Caça ao Rato
// Implemente a função catAndMouse que verifica qual gato está mais perto do rato

// Imagine que dois gatos estão caçando o mesmo rato. Você precisa verificar qual gato está mais perto de sua presa. Para isso, implemente a função `catAndMouse` que recebe 3 parâmetros do tipo `number` na seguinte ordem:
// - `mouse`: representa a posição do rato.

// - `cat1`: representa a posição de um dos gatos;

// - `cat2`: representa a posição do outro gato ;
// Calcule as distâncias entre o rato e cada um dos gatos e retorne qual dos felinos está mais próximo do rato:

// Retorne a string 'cat2' se o gato cat2 estiver mais próximo do rato;
// Retorne a string 'cat1' se o gato cat1 estiver mais próximo do rato;
// Retorne a string 'os gatos trombam e o rato foge' caso os gatos estejam na mesma distância do rato.
// Exemplo:

// Caso o gato cat2 esteja a 2 unidades de distância do rato e o cat1 esteja a 3 unidades, sua função deverá retornar 'cat2';

// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string 'os gatos trombam e o rato foge'.

// O que será testado:

// Retorne a string 'cat2' caso a função catAndMouse receba os parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato;

// Retorne a string 'cat1' caso a função catAndMouse receba os parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato ;

// Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba os parâmetros onde os gatos estejam na mesma distância do rato.

const catAndMouse = (mouse, cat1, cat2) => {

  let oneCat = Math.abs(mouse - cat1);
  let twoCat = Math.abs(mouse - cat2);

  if (oneCat < twoCat) {
    return 'cat1';
  } else if ((oneCat === twoCat) )  {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

console.log(catAndMouse(3,6,5));

console.log(catAndMouse(10,16,22));

console.log(catAndMouse(4,4,4));