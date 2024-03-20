const prompt = require('prompt-sync')();

const genero = prompt("Digite o seu gênero (M para masculino, F para feminino):");
const altura = parseFloat(prompt("Digite a sua altura em metros:"));

let pesoIdeal;
if (genero.toUpperCase() === "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else if (genero.toUpperCase() === "F") {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    console.log("Gênero inválido. Digite M para masculino ou F para feminino.");
    process.exit(1);
}

console.log(`Seu peso ideal é aproximadamente ${pesoIdeal.toFixed(2)} kg.`);
