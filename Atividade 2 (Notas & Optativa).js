const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));
const notaOptativa = parseFloat(prompt("Digite a nota da avaliação optativa (-1 se não fez):"));

let mediaSemestre;
if (notaOptativa !== -1) {
    mediaSemestre = (nota1 + nota2 + notaOptativa) / 3;
} else {
    mediaSemestre = (nota1 + nota2) / 2;
}

let status;
if (mediaSemestre >= 6.0) {
    status = "Aprovado";
} else if (mediaSemestre < 3.0) {
    status = "Reprovado";
} else {
    status = "Exame";
}

console.log(`Média do semestre: ${mediaSemestre.toFixed(2)}`);
console.log(`Situação do aluno: ${status}`);
