const prompt = require('prompt-sync')();

// Leia os valores do usuário
const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));
const valor3 = parseFloat(prompt("Digite o terceiro valor:"));

// Encontre o menor, o do meio e o maior
let menor, meio, maior;

if (valor1 < valor2 && valor1 < valor3) {
    menor = valor1;
    if (valor2 < valor3) {
        meio = valor2;
        maior = valor3;
    } else {
        meio = valor3;
        maior = valor2;
    }
} else if (valor2 < valor1 && valor2 < valor3) {
    menor = valor2;
    if (valor1 < valor3) {
        meio = valor1;
        maior = valor3;
    } else {
        meio = valor3;
        maior = valor1;
    }
} else {
    menor = valor3;
    if (valor1 < valor2) {
        meio = valor1;
        maior = valor2;
    } else {
        meio = valor2;
        maior = valor1;
    }
}

// Exiba os valores em ordem crescente
console.log(`Valores em ordem crescente: ${menor}, ${meio}, ${maior}`);
