// Lê o número (substitua pelo valor desejado)
let prompt = require('prompt-sync')();

var numero = parseInt(prompt("Digite um número:"));

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log("Você digitou um número par.");
} else {
    console.log("Você digitou um número ímpar.")
}