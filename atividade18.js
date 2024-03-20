const prompt = require('prompt-sync')();

const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));
const valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let maior;
if (valor1 > valor2 && valor1 > valor3) {
    maior = valor1;
} else if (valor2 > valor1 && valor2 > valor3) {
    maior = valor2;
} else {
    maior = valor3;
}

console.log(`O maior valor é: ${maior}`);
