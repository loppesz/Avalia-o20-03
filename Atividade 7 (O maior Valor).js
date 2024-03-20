const prompt = require('prompt-sync')();

const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));

let maior;
if (valor1 > valor2) {
    maior = valor1;
} else {
    maior = valor2;
}

console.log(`O maior valor é: ${maior}`);
