const findMaxNumber = (a) => {
  let maior = 0;
  let menor = 2 ^ 45;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > maior) {
      maior = a[i];
    }
    if (a[i] < menor) {
      menor = a[i];
    }
  }
  console.log(`O maior número é ${maior}`);
  console.log(`O menor número é ${menor}`);
};

let numeros = [15, 76, 54, 32, 198, 100];

findMaxNumber(numeros);
// TEM COMO FAZER DE UM JEITO BEM MAIS FACIL
// UTILIZANDO O Math.max PARA ACHAR O MAIOR
// UTILIZANDO O Math.min PARA ACHAR O MENOR

let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

console.log(maior);
console.log(menor);