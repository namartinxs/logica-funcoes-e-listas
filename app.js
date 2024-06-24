//altere o titulo do h1
let alteraTitulo = document.querySelector('h1');
alteraTitulo.innerHTML = 'Hora do Desafio'; 

//atribua funcao ao botao console 
function clickConsole(){
    console.log('O botão foi clicado');
} 

//alert para o botao alerta
function msgAlerta(){
    alert('Eu amo JS');
}

//prompt para o botao prompt
function askCidade(){
    let pergunta = prompt('Uma cidade do Brasil que você já esteve');
    alert(`Estive em ${pergunta} e lembrei de você.`);
}

function soma(){
    let n1 = parseInt(prompt('Um número entre 10 e 20'));
    let n2 = parseInt(prompt('Um número entre 15 e 50'));
    let somatoria = n1 + n2;
    alert(`A soma entre ${n1} e ${n2} é: ${somatoria}`);

}