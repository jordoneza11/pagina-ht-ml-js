function encontrarMayorYMenor() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseFloat(num.trim()));
    let resultado = document.getElementById("resultado");

    if (numerosArray.length !== 7) {
        resultado.innerHTML = "Debe ingresar exactamente 7 números separados por comas.";
        return;
    }

    let mayor = numerosArray[0];
    let menor = numerosArray[0];

    for (let i = 1; i < numerosArray.length; i++) {
        if (numerosArray[i] > mayor) {
            mayor = numerosArray[i];
        }
        if (numerosArray[i] < menor) {
            menor = numerosArray[i];
        }
    }

    resultado.innerHTML = `El mayor número ingresado es: ${mayor}<br>El menor número ingresado es: ${menor}`;
}
