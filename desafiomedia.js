let ask1= parseInt(prompt('Insira o 1º número'));
let ask2= parseInt(prompt('Insira o 2º número'));
let ask3= parseInt(prompt('Insira o 3º número'));

function calculaMedia (n1,n2,n3){
   return  (n1+n2+n3) / 3;
    
}

let resposta = calculaMedia(ask1,ask2,ask3);
console.log ('A média destes números é ' + resposta);