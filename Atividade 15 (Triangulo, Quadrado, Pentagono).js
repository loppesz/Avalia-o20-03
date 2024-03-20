const prompt = require('prompt-sync')();

// Leia o número de lados e a medida do lado do polígono
const numLados = parseInt(prompt("Digite o número de lados do polígono:"));
const medidaLado = parseFloat(prompt("Digite a medida do lado em centímetros:"));

// Verifique o tipo de polígono e calcule conforme o número de lados
if (numLados === 3) {
    // Triângulo
    const perimetro = numLados * medidaLado;
    console.log(`TRIÂNGULO - Perímetro: ${perimetro.toFixed(2)} cm`);
} else if (numLados === 4) {
    // Quadrado
    const area = medidaLado ** 2;
    console.log(`QUADRADO - Área: ${area.toFixed(2)} cm²`);
} else if (numLados === 5) {
    // Pentágono
    console.log("PENTÁGONO");
}
