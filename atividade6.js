let prompt = require('prompt-sync')();

var numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    console.log("Você digitou um número positivo.");
} else if (numero < 0) {
    console.log("Você digitou um número negativo.");
} else {
    console.log("Você digitou zero.");}