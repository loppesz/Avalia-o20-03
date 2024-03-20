//calculadora
const prompt = require('prompt-sync')();

let op
let n1;


console.log('Olá')
console.log('Selecione o código de sua região')

op = parseInt(prompt ('Digite o Código '));

switch(op){
    case 1: 
        soma=n1*1;
        console.log('Sul' );
        
        break;
    case 2:
        soma=n1*2;
        console.log('Norte ');
        break;
    case 3:
        soma=n1*3;
        console.log('leste ');
        break;
    case 4:
        soma=n1*4;
        console.log('Oeste');
        break;
    case 5:
        soma=n1*5;
        console.log('Nordeste' );
        break;
    case 6:
        console.log('Nordeste ');
        break;
    case 7:
        console.log('Sudeste ');
        break;
    case 8:
        console.log('Sudeste ');
        break;
    case 9:
        console.log('Sudeste ');
        break;
    case 10:
        console.log('Centro-Oeste ');
        break;
    case 11:
            console.log('Noroeste ');
            break;
    default:
        console.log('Produto Importado')
}
