const prompt = require('prompt-sync')();

const num_macas = parseFloat(prompt("Digite o número de maçãs compradas:"));


let valor_unitario;
if (num_macas >= 12) {
    valor_unitario = 0.25;
} else {
    valor_unitario = 0.30;
}

const valor_total = num_macas * valor_unitario;


console.log(`O valor total da compra é: R$${valor_total.toFixed(2)}`);
