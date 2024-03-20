const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));

mediaSemestre = (nota1 + nota2) / 2;

let status;
if (mediaSemestre >= 6.0) {
    status = "PARABÉNS! Você foi Aprovado";
} else if (mediaSemestre < 3.0) {
    status = "REPROVADO. Estude Mais";
} 

console.log(`Média do semestre: ${mediaSemestre.toFixed(2)}`);
console.log(`Situação do aluno: ${status}`);
