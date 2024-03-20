// Leia os valores do usuário e valide o divisor
const prompt = require('prompt-sync')();

while (true) {
    try {
        const numerador = parseFloat(prompt("Digite o numerador:"));
        const denominador = parseFloat(prompt("Digite o denominador (não pode ser zero):"));

        if (denominador !== 0) {
            // Realize a divisão e exiba o resultado
            const resultado = numerador / denominador;
            console.log(`Resultado da divisão: ${resultado.toFixed(2)}`);
            break;
        } else {
            console.log("O denominador não pode ser zero. Tente novamente.");
        }
    } catch (error) {
        console.log("Valor inválido. Digite um número válido.");
    }
}
