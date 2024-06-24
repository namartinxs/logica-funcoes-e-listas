let ask = parseInt(prompt('Insira um número e descubra o quadrado deste'));

function descobreQuadrado(n1){
    return n1 * n1;
}

let resposta = descobreQuadrado(ask);
console.log('o quadrado de ' + ask + ' é ' +resposta);