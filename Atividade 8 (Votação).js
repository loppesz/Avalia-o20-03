const prompt = require('prompt-sync')();

const numero = parseFloat(prompt("Digite seu Ano de nascimento: "));

if (numero <= 2009) {
    console.log("Você está apto a votar");
} else if (numero > 2009) {
    console.log("Você não poderá votar esse ano");}
