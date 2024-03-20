const prompt = require('prompt-sync')();

const gols_gremio = parseInt(prompt("Digite o número de gols marcados pelo Grêmio:"));
const gols_internacional = parseInt(prompt("Digite o número de gols marcados pelo Internacional:"));

if (gols_gremio > gols_internacional) {
    console.log("Grêmio venceu!");
} else if (gols_internacional > gols_gremio) {
    console.log("Internacional venceu!");
} else {
    console.log("Empate!");
}
