const prompt = require('prompt-sync')();

const numero = parseFloat(prompt("Digite sua senha com 4 digitos: "));

if (numero == 1234) {
    console.log("ACESSO PERMITIDO");
} else if (numero != 1234) {
    console.log("ACESSO NEGADO");}
