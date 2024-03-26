alert("bem vindo ao jogo");

    let númeroSecreto=22;
    let númeroDigitado=parseInt(prompt("digite um número de 1 a 50"));

if (númeroDigitado==númeroSecreto){
    alert("voce acertou")
}

else if(númeroDigitado>númeroSecreto){
    alert("voce digitou um número maior")
}
else{
    alert("voce digitou um número menor")
}
