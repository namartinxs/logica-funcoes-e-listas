let n1= parseInt(prompt('Insira o 1º número'));
let n2= parseInt(prompt('Insira o 2º número'));

function encontraMaior(num1,num2){
    return num1 > num2 ? num1 : num2;

}

let resposta = encontraMaior(n1,n2);
console.log('O maior entre os números é: ' + resposta);