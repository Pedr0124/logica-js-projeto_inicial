let listaNumerosDigitados = [];
let media
let soma =0


for (let i = 0; i < 4; i++) {

    let numeroDigitado = parseInt(prompt(`digite um numero`));
    listaNumerosDigitados.push(numeroDigitado);
    alert(listaNumerosDigitados[i]);
    soma = soma + listaNumerosDigitados[i];

}
media = soma / 4
alert(media)