const prompt = require('prompt-sync')();

const numLados = parseInt(prompt("Digite o número de lados do polígono:"));
const medidaLado = parseFloat(prompt("Digite a medida do lado em centímetros:"));

if (numLados === 3) {
    const perimetro = numLados * medidaLado;
    console.log(`TRIÂNGULO - Perímetro: ${perimetro.toFixed(2)} cm`);
} else if (numLados === 4) {
    const area = medidaLado ** 2;
    console.log(`QUADRADO - Área: ${area.toFixed(2)} cm²`);
} else if (numLados === 5) {
    console.log("PENTÁGONO");
} else if (numLados < 3) {
    console.log("Não é um polígono (menos de 3 lados).");
} else {
    console.log("Polígono não identificado (mais de 5 lados).");
}
