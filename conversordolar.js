function mensagem(tag,texto){
    let msg = document.querySelector(tag);
    msg.innerHTML=texto;
}

mensagem('h1','Conversor - Dólar');

function conversora (){
    let putDolar = document.querySelector('input').value;
    let numero = parseFloat(putDolar)
    let cotacao = 4.80;
    let conversao = numero * cotacao;
    let resposta = conversao.toFixed(2); 
    mensagem('p',' O valor ' + putDolar + ' convertido para reais é ' +resposta)
}


