alert("bem vindo ao jogo");

let numeroSecreto = Math.floor(Math.random() * 5 + 1);
let tentativas = 5;

while (tentativas > 0) {
    let numeroDigitado = parseInt(prompt("digite um numero de 1 a 5"));

    if (numeroDigitado == numeroSecreto) {
        alert(`voce acertou o numero ${numeroSecreto}`);
        break;
    }
    else if (numeroDigitado > numeroSecreto) {
        alert(`voce digitou ${numeroDigitado} que é um número maior`);
    }
    else {
        alert(`voce digitou ${numeroDigitado} um numero menor`);
    }
    tentativas = tentativas - 1;


    if (tentativas == 0) {
        alert(`suas tentativas acabaram`)
    }
    else if (tentativas >= 2) {
        alert(`voce ainda tem ${tentativas} tentativas`);
    }
    else {
        alert(`voce tem ${tentativas} tentativa`)
    }
}
let palavraTentativa
if (tentativas > 0) {
    tentativas = 4 - tentativas;
    alert(`voce conseguiu em ${tentativas} tentativas`);
}