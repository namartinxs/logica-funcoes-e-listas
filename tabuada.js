function tabuada(numero){
    for (let i =1; i<10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

let numero = 5;
tabuada(numero)